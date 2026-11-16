import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import * as THREE from "three";
import { useSim } from "@/sim/store";
import { CHAMBER, useChamberUi } from "./chamberUi";

const { cy, r, len } = CHAMBER;
const FRONT_Z = len / 2;

// dished door: spherical cap with rim radius = vessel radius
const DOOR_THETA = 0.8;
const DOOR_R = r / Math.sin(DOOR_THETA); // sphere radius of the cap
const DOOR_RIM_DIST = DOOR_R * Math.cos(DOOR_THETA); // sphere center → rim plane
const DOOR_TIP_Z = FRONT_Z + (DOOR_R - DOOR_RIM_DIST); // dome tip

/* Module-scope three.js objects: shared across meshes and mutated per-frame
   in useFrame (opacity crossfade, clip plane, interlock blink). */
const STEEL_MAT = new THREE.MeshStandardMaterial({
  color: "#8a94a0",
  metalness: 0.9,
  roughness: 0.35,
  side: THREE.DoubleSide,
});
const BOLT_DOT_MAT = new THREE.MeshStandardMaterial({
  color: "#111820",
  emissive: "#3ddc84",
  emissiveIntensity: 0,
});
const CLIP_PLANE = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0.9);
const CLIP_PLANES = [CLIP_PLANE];

/**
 * Vacuum vessel: brushed-steel horizontal cylinder, dished front door with
 * 8 interlock bolts + viewport ring, hinge knuckles, VAC/THM status lights.
 * Handles assembled/ghost/section material crossfade + clip plane.
 */
export default function Vessel() {
  const glassRef = useRef<THREE.MeshStandardMaterial>(null);
  const innerLightRef = useRef<THREE.PointLight>(null);
  const doorGroup = useRef<THREE.Group>(null);
  const viewportGroup = useRef<THREE.Group>(null);
  const vacLedRef = useRef<THREE.MeshStandardMaterial>(null);
  const thmLedRef = useRef<THREE.MeshStandardMaterial>(null);
  const handleRef = useRef<THREE.Mesh>(null);
  const exploded = useRef(0);
  const dragging = useRef(false);


  const bolts = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
        return {
          x: Math.cos(a) * (r - 0.14),
          y: cy + Math.sin(a) * (r - 0.14),
        };
      }),
    [],
  );

  // Section-mode drag handle: raycast onto the horizontal plane y = cy.
  const dragPlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 1, 0), -cy),
    [],
  );
  const hit = useMemo(() => new THREE.Vector3(), []);

  const onHandleDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    dragging.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
  };
  const onHandleMove = (e: ThreeEvent<PointerEvent>) => {
    if (!dragging.current) return;
    e.stopPropagation();
    if (e.ray.intersectPlane(dragPlane, hit)) {
      useChamberUi
        .getState()
        .setSectionZ(Math.min(2.2, Math.max(-1.2, hit.z)));
    }
  };
  const onHandleUp = (e: ThreeEvent<PointerEvent>) => {
    dragging.current = false;
    (e.target as Element).releasePointerCapture(e.pointerId);
  };

  useFrame((_, dt) => {
    const ui = useChamberUi.getState();
    const s = useSim.getState();
    const t = performance.now() / 1000;
    const powered = s.power === "FACILITY_ON";

    // eased exploded factor
    exploded.current = THREE.MathUtils.damp(exploded.current, ui.exploded, 5, dt);
    const ex = exploded.current;
    if (doorGroup.current) doorGroup.current.position.z = 1.5 * ex;
    if (viewportGroup.current) viewportGroup.current.position.z = 2.3 * ex;

    // material crossfade per view mode
    const steel = STEEL_MAT;
    {
      const targetOpacity = ui.viewMode === "ghost" ? 0.18 : 1;
      steel.opacity = THREE.MathUtils.damp(steel.opacity, targetOpacity, 8, dt);
      steel.transparent = steel.opacity < 0.98;
      steel.depthWrite = steel.opacity > 0.6;
      const planes = ui.viewMode === "section" ? CLIP_PLANES : null;
      if (steel.clippingPlanes !== planes) {
        steel.clippingPlanes = planes;
        steel.needsUpdate = true;
      }
      CLIP_PLANE.constant = ui.sectionZ;
    }
    if (glassRef.current) {
      const planes = ui.viewMode === "section" ? CLIP_PLANES : null;
      if (glassRef.current.clippingPlanes !== planes) {
        glassRef.current.clippingPlanes = planes;
        glassRef.current.needsUpdate = true;
      }
    }

    // interior light brighter when ghosted/sectioned
    if (innerLightRef.current) {
      const target = !powered ? 0.05 : ui.viewMode === "assembled" ? 0.35 : 1.4;
      innerLightRef.current.intensity = THREE.MathUtils.damp(
        innerLightRef.current.intensity,
        target,
        6,
        dt,
      );
    }

    // vessel status LEDs (VAC / THM)
    const setLed = (
      mat: THREE.MeshStandardMaterial | null,
      color: string,
      intensity: number,
    ) => {
      if (!mat) return;
      mat.emissive.set(color);
      mat.emissiveIntensity = intensity;
    };
    if (!powered) {
      setLed(vacLedRef.current, "#000000", 0);
      setLed(thmLedRef.current, "#000000", 0);
    } else {
      const vacOk = s.pressure < 1e-3;
      const vacMid = s.pressure < 3;
      const vacPulse = vacOk || vacMid ? 1 : 0.4 + 0.3 * Math.sin(t * 3);
      setLed(
        vacLedRef.current,
        vacOk ? "#3ddc84" : vacMid ? "#5aa2f0" : "#f0b64c",
        vacPulse * 1.6,
      );
      setLed(
        thmLedRef.current,
        s.thermalStable ? "#3ddc84" : s.thermalEnabled ? "#c47a4a" : "#f0b64c",
        s.thermalStable ? 1.6 : 0.6 + 0.4 * Math.sin(t * 3),
      );
    }

    // interlock bolt dots (all bolts share one material)
    if (!powered) {
      BOLT_DOT_MAT.emissive.set("#000000");
      BOLT_DOT_MAT.emissiveIntensity = 0;
    } else {
      const fault = s.venting || s.faults.leak;
      const blink = fault ? (Math.sin(t * 12) > 0 ? 1 : 0.15) : 1;
      BOLT_DOT_MAT.emissive.set(fault ? "#f0524f" : "#3ddc84");
      BOLT_DOT_MAT.emissiveIntensity = 1.4 * blink;
    }

    // section drag handle visibility + position
    if (handleRef.current) {
      handleRef.current.visible = ui.viewMode === "section";
      handleRef.current.position.z = ui.sectionZ;
    }
  });

  return (
    <group>
      {/* main body */}
      <mesh
        material={STEEL_MAT}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, cy, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          useChamberUi.getState().setHover("vessel");
        }}
        onPointerOut={() => useChamberUi.getState().setHover(null)}
      >
        <cylinderGeometry args={[r, r, len, 64]} />
      </mesh>
      {/* back cap */}
      <mesh material={STEEL_MAT} rotation={[Math.PI / 2, 0, 0]} position={[0, cy, -FRONT_Z - 0.08]}>
        <cylinderGeometry args={[r * 0.98, r, 0.16, 64]} />
      </mesh>
      {/* saddle supports to bench */}
      {[-0.7, 0.7].map((z) => (
        <mesh key={z} position={[0, (cy - r) / 2, z]}>
          <boxGeometry args={[1.2, cy - r, 0.3]} />
          <meshStandardMaterial color="#39424e" metalness={0.7} roughness={0.5} />
        </mesh>
      ))}

      {/* interior fill light */}
      <pointLight
        ref={innerLightRef}
        position={[0, cy + 0.6, 0.4]}
        color="#bfeee8"
        intensity={0.4}
        distance={6}
        decay={2}
      />

      {/* front door group (explodes +z) */}
      <group ref={doorGroup}>
        {/* dished door: spherical cap, dome toward +z */}
        <mesh material={STEEL_MAT} rotation={[Math.PI / 2, 0, 0]} position={[0, cy, FRONT_Z - DOOR_RIM_DIST]}>
          <sphereGeometry args={[DOOR_R, 48, 24, 0, Math.PI * 2, 0, DOOR_THETA]} />
        </mesh>
        {/* hinge knuckles (vertical axis) */}
        {[-0.5, 0.5].map((dy) => (
          <mesh key={dy} position={[-r - 0.08, cy + dy, FRONT_Z - 0.05]}>
            <cylinderGeometry args={[0.09, 0.09, 0.34, 16]} />
            <meshStandardMaterial color="#5c6672" metalness={0.85} roughness={0.5} />
          </mesh>
        ))}
        {/* bolts with interlock dots */}
        {bolts.map((b, i) => (
          <group key={i} position={[b.x, b.y, FRONT_Z + 0.1]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.16, 12]} />
              <meshStandardMaterial color="#5c6672" metalness={0.85} roughness={0.45} />
            </mesh>
            <mesh position={[0, 0, 0.1]} material={BOLT_DOT_MAT}>
              <sphereGeometry args={[0.028, 10, 10]} />
            </mesh>
          </group>
        ))}
      </group>

      {/* viewport ring + glass (explodes further +z) */}
      <group ref={viewportGroup}>
        <mesh position={[0, cy, DOOR_TIP_Z - 0.04]}>
          <torusGeometry args={[0.42, 0.08, 16, 48]} />
          <meshStandardMaterial color="#6b7582" metalness={0.9} roughness={0.35} />
        </mesh>
        <mesh position={[0, cy, DOOR_TIP_Z - 0.06]}>
          <circleGeometry args={[0.4, 48]} />
          <meshStandardMaterial
            ref={glassRef}
            color="#9fd8e8"
            metalness={0.1}
            roughness={0.05}
            transparent
            opacity={0.14}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* vessel status lights (VAC / THM) on the shell crown */}
      {[-0.09, 0.12].map((a, i) => (
        <mesh
          key={i}
          position={[Math.sin(a) * r, cy + Math.cos(a) * r, FRONT_Z - 0.5]}
        >
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            ref={i === 0 ? vacLedRef : thmLedRef}
            color="#101720"
            emissive="#3ddc84"
          />
        </mesh>
      ))}

      {/* section plane drag handle */}
      <mesh
        ref={handleRef}
        position={[r + 0.35, cy, 0.9]}
        visible={false}
        onPointerDown={onHandleDown}
        onPointerMove={onHandleMove}
        onPointerUp={onHandleUp}
      >
        <torusGeometry args={[0.14, 0.035, 12, 32]} />
        <meshStandardMaterial
          color="#2dd4c8"
          emissive="#2dd4c8"
          emissiveIntensity={0.9}
        />
      </mesh>
    </group>
  );
}
