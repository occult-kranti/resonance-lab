import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSim } from "@/sim/store";
import { CHAMBER, useChamberUi } from "./chamberUi";
import type { HoverId } from "./chamberUi";

const setHover = (h: HoverId) => useChamberUi.getState().setHover(h);

/** Pump stack below/behind the chamber: foreline pipes, turbo with spinning
 *  rotor hint (speed tied to spool %), roughing pump box. */
export function PumpStack() {
  const rotorRef = useRef<THREE.Group>(null);
  const turboMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const ringMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const stackRef = useRef<THREE.Group>(null);
  const roughRef = useRef<THREE.Mesh>(null);
  const exploded = useRef(0);

  useFrame((state, dt) => {
    const s = useSim.getState();
    const ui = useChamberUi.getState();
    const t = state.clock.elapsedTime;
    const powered = s.power === "FACILITY_ON";

    exploded.current = THREE.MathUtils.damp(exploded.current, ui.exploded, 5, dt);
    if (stackRef.current)
      stackRef.current.position.set(
        0,
        -0.5 * exploded.current,
        -0.5 * exploded.current,
      );

    // rotor: spool % → up to ~40 rad/s visual
    if (rotorRef.current)
      rotorRef.current.rotation.y += dt * (s.turboSpool / 100) * 40;

    if (ringMatRef.current) {
      ringMatRef.current.emissiveIntensity = powered
        ? (s.turboSpool / 100) * 1.6
        : 0;
    }
    if (turboMatRef.current) {
      turboMatRef.current.opacity = 0.35;
    }
    // roughing pump vibration when running
    if (roughRef.current) {
      const vib = powered && s.roughingOn && !ui.reduceMotion ? 0.004 : 0;
      roughRef.current.position.y = 0.3 + vib * Math.sin(t * 90);
    }
  });

  return (
    <group ref={stackRef}>
      {/* chamber bottom port */}
      <mesh position={[0, CHAMBER.cy - CHAMBER.r + 0.15, -0.9]}>
        <cylinderGeometry args={[0.3, 0.3, 0.3, 24]} />
        <meshStandardMaterial color="#7d8794" metalness={0.9} roughness={0.4} />
      </mesh>
      {/* vertical foreline down */}
      <mesh position={[0, 0.55, -0.9]}>
        <cylinderGeometry args={[0.26, 0.26, 0.4, 24]} />
        <meshStandardMaterial color="#8a94a0" metalness={0.9} roughness={0.35} />
      </mesh>
      {/* horizontal foreline to turbo */}
      <mesh position={[0, 0.4, -1.75]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 1.7, 24]} />
        <meshStandardMaterial color="#8a94a0" metalness={0.9} roughness={0.35} />
      </mesh>

      {/* turbo pump: transparent housing + rotor hint + speed ring */}
      <group
        position={[0, 0, -2.6]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover("turbo");
        }}
        onPointerOut={() => setHover(null)}
      >
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.44, 0.46, 1.0, 32]} />
          <meshStandardMaterial
            ref={turboMatRef}
            color="#9aa6b2"
            metalness={0.85}
            roughness={0.3}
            transparent
            opacity={0.35}
          />
        </mesh>
        {/* rotor disc stack */}
        <group ref={rotorRef} position={[0, 0.55, 0]}>
          {[0, 0.14, 0.28].map((dy) => (
            <mesh key={dy} position={[0, dy, 0]}>
              <cylinderGeometry args={[0.36, 0.36, 0.03, 24]} />
              <meshStandardMaterial color="#c7d0da" metalness={0.95} roughness={0.2} />
            </mesh>
          ))}
          {/* imbalance marker so spin is visible */}
          <mesh position={[0.3, 0.14, 0]}>
            <boxGeometry args={[0.1, 0.5, 0.06]} />
            <meshStandardMaterial color="#5aa2f0" metalness={0.6} roughness={0.4} />
          </mesh>
        </group>
        {/* speed ring */}
        <mesh position={[0, 0.06, 0]}>
          <torusGeometry args={[0.46, 0.03, 10, 40]} />
          <meshStandardMaterial
            ref={ringMatRef}
            color="#101720"
            emissive="#5aa2f0"
            emissiveIntensity={0}
          />
        </mesh>
        {/* flange into foreline */}
        <mesh position={[0, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.5, 24]} />
          <meshStandardMaterial color="#8a94a0" metalness={0.9} roughness={0.35} />
        </mesh>
      </group>

      {/* roughing pump box */}
      <mesh
        ref={roughRef}
        position={[1.35, 0.3, -2.5]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover("turbo");
        }}
        onPointerOut={() => setHover(null)}
      >
        <boxGeometry args={[1.0, 0.6, 0.7]} />
        <meshStandardMaterial color="#2a3440" metalness={0.6} roughness={0.5} />
      </mesh>
      {/* roughing hose (diagonal) */}
      <mesh position={[0.85, 0.42, -2.55]} rotation={[0, 0, Math.PI / 3.2]}>
        <cylinderGeometry args={[0.06, 0.06, 1.1, 10]} />
        <meshStandardMaterial color="#39424e" metalness={0.4} roughness={0.7} />
      </mesh>
    </group>
  );
}

/** Optical bench slab with tapped-hole grid + ghosted equipment racks. */
export function Bench() {
  const holesRef = useRef<THREE.InstancedMesh>(null);
  const holes = useMemo(() => {
    const arr: [number, number][] = [];
    for (let ix = -6; ix <= 6; ix++)
      for (let iz = -4; iz <= 4; iz++) arr.push([ix * 0.65, iz * 0.65]);
    return arr;
  }, []);

  useLayoutEffect(() => {
    const inst = holesRef.current;
    if (!inst) return;
    const m = new THREE.Matrix4();
    holes.forEach(([x, z], i) => {
      m.setPosition(x, 0.002, z);
      inst.setMatrixAt(i, m);
    });
    inst.instanceMatrix.needsUpdate = true;
  }, [holes]);

  return (
    <group>
      <mesh position={[0, -0.16, 0]}>
        <boxGeometry args={[9.5, 0.32, 6.5]} />
        <meshStandardMaterial color="#161d27" metalness={0.5} roughness={0.6} />
      </mesh>
      {/* tapped holes */}
      <instancedMesh ref={holesRef} args={[undefined, undefined, holes.length]}>
        <cylinderGeometry args={[0.035, 0.035, 0.02, 10]} />
        <meshStandardMaterial color="#05080d" metalness={0.3} roughness={0.9} />
      </instancedMesh>
      {/* ghosted racks at edges */}
      {[-4.4, 4.4].map((x) => (
        <group key={x} position={[x, 0, -1.2]}>
          <mesh position={[0, 1.15, 0]}>
            <boxGeometry args={[0.95, 2.3, 1.3]} />
            <meshStandardMaterial
              color="#1e2a38"
              metalness={0.4}
              roughness={0.7}
              transparent
              opacity={0.18}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/** Deterministic PRNG (pure — stable particle layout across renders). */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Haze particles drifting in the chamber when vented (visible in ghost/section). */
export function Haze({ count = 220 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);

  const positions = useMemo(() => {
    const rand = mulberry32(1337);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2;
      const rr = Math.sqrt(rand()) * (CHAMBER.r - 0.25);
      arr[i * 3] = Math.cos(a) * rr;
      arr[i * 3 + 1] = CHAMBER.cy + Math.sin(a) * rr;
      arr[i * 3 + 2] = (rand() * 2 - 1) * (CHAMBER.len / 2 - 0.2);
    }
    return arr;
  }, [count]);

  useFrame((state, dt) => {
    const s = useSim.getState();
    const ui = useChamberUi.getState();
    const pts = pointsRef.current;
    const mat = matRef.current;
    if (!pts || !mat) return;

    const target =
      s.pressure > 50 && ui.viewMode !== "assembled" && !ui.reduceMotion
        ? 0.16
        : 0;
    mat.opacity = THREE.MathUtils.damp(mat.opacity, target, 3, dt);
    pts.visible = mat.opacity > 0.01;
    if (!pts.visible) return;

    const pos = pts.geometry.attributes.position;
    const arr = pos.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += Math.sin(t * 0.4 + i) * 0.0006;
      arr[i * 3 + 1] += dt * 0.02 * (0.5 + 0.5 * Math.sin(i));
      if (arr[i * 3 + 1] > CHAMBER.cy + CHAMBER.r - 0.3)
        arr[i * 3 + 1] = CHAMBER.cy - CHAMBER.r + 0.3;
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} visible={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        color="#8296ab"
        size={0.025}
        transparent
        opacity={0}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
