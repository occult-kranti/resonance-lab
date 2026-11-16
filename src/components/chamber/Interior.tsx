import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { qForPressure, trueF0Hz, useSim } from "@/sim/store";
import {
  CHAMBER,
  CHIRP_DURATION_S,
  MM_TO_U,
  SPHERE_R,
  chirpFreqHz,
  lorentzianResponse,
  useChamberUi,
} from "./chamberUi";

const { cy } = CHAMBER;
const UP = new THREE.Vector3(0, 1, 0);

// stage stack heights (scene units)
const BASE_TOP = 1.05;
const X_CARR_Y = 1.17;
const Z_CARR_Y = 1.31;
const Y_CARR_Y = 1.48; // center of Y carriage (before sim offset)
const STEM_BOT = 1.54;
const STEM_TOP = cy - SPHERE_R; // sphere underside

import type { HoverId } from "./chamberUi";

const setHover = (h: HoverId) => useChamberUi.getState().setHover(h);

/**
 * Chamber interior: solid copper sphere on stem + drive piezo, motorized
 * XYZ stage (three orthogonal carriages), A/B markers, LDV beam from the
 * viewport lens to the sphere surface.
 */
export default function Interior() {
  const xRef = useRef<THREE.Group>(null);
  const zRef = useRef<THREE.Group>(null);
  const yRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const sphereMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const piezoMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const beamRef = useRef<THREE.Mesh>(null);
  const beamMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const haloMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const glowMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const lensMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const exploded = useRef(0);
  const lastDriveOn = useRef(false);
  const igniteT = useRef(-1);

  const tmpA = useMemo(() => new THREE.Vector3(), []);
  const tmpB = useMemo(() => new THREE.Vector3(), []);
  const tmpDir = useMemo(() => new THREE.Vector3(), []);

  const ticksX = useMemo(() => {
    const arr: number[] = [];
    for (let i = -8; i <= 8; i++) arr.push(i * 0.1);
    return arr;
  }, []);

  useFrame((state, dt) => {
    const ui = useChamberUi.getState();
    const s = useSim.getState();
    const t = state.clock.elapsedTime;
    const powered = s.power === "FACILITY_ON";

    exploded.current = THREE.MathUtils.damp(exploded.current, ui.exploded, 5, dt);
    const ex = exploded.current;

    // ---- stage carriages follow sim state (damped = accel/decel profile) ----
    const px = s.stage.x * MM_TO_U;
    const py = s.stage.y * MM_TO_U;
    const pz = s.stage.z * MM_TO_U;
    if (xRef.current)
      xRef.current.position.x = THREE.MathUtils.damp(
        xRef.current.position.x,
        px - 0.5 * ex,
        6,
        dt,
      );
    if (zRef.current)
      zRef.current.position.z = THREE.MathUtils.damp(
        zRef.current.position.z,
        pz + 0.4 * ex,
        6,
        dt,
      );
    if (yRef.current)
      yRef.current.position.y = THREE.MathUtils.damp(
        yRef.current.position.y,
        py + 0.6 * ex,
        6,
        dt,
      );

    // sphere world position (for beam targeting)
    const sx = xRef.current?.position.x ?? px;
    const syy = yRef.current?.position.y ?? py;
    const sz = zRef.current?.position.z ?? pz;

    // ---- drive amplitude (honest: Lorentzian response, passive) ----
    let amp = 0;
    if (powered && ui.driveOn) {
      const f0 = trueF0Hz(s, "A");
      const q = qForPressure(s.pressure);
      let resp = 1; // continuous drive sits on resonance
      if (ui.chirpStart != null) {
        const ct = (performance.now() - ui.chirpStart) / 1000;
        if (ct > CHIRP_DURATION_S) {
          ui.endChirp();
        } else {
          resp = lorentzianResponse(chirpFreqHz(ct), f0, q);
        }
      }
      amp = (ui.driveVolts / 10) * resp * Math.min(1, q / 9000);
    }

    // ---- sphere breathing-mode pulse + resonance glow ----
    if (sphereRef.current && sphereMatRef.current) {
      const osc = ui.reduceMotion ? 0 : Math.sin(t * Math.PI * 4); // 2 Hz visualization
      sphereRef.current.scale.setScalar(1 + 0.002 * amp * osc);
      sphereMatRef.current.emissiveIntensity = powered ? 0.06 + 1.1 * amp : 0;
    }

    // ---- piezo flicker ----
    if (piezoMatRef.current) {
      piezoMatRef.current.emissiveIntensity =
        powered && ui.driveOn
          ? 0.5 + 0.5 * Math.abs(Math.sin(t * 31) * Math.sin(t * 7.3))
          : 0;
    }

    // ---- LDV beam ----
    if (ui.driveOn && !lastDriveOn.current) igniteT.current = t;
    lastDriveOn.current = ui.driveOn;

    const beamOn = powered;
    let beamOpacity = 0;
    if (beamOn) {
      if (ui.reduceMotion) {
        beamOpacity = ui.driveOn ? 0.85 : 0.35;
      } else if (ui.driveOn) {
        beamOpacity = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * Math.PI)); // 2 s sine
        // ignition flicker for 200 ms after drive engaged
        if (igniteT.current >= 0 && t - igniteT.current < 0.2) {
          beamOpacity = Math.random() > 0.5 ? 1 : 0.15;
        } else {
          igniteT.current = -1;
        }
      } else {
        beamOpacity = 0.3;
      }
    }
    if (beamMatRef.current) beamMatRef.current.opacity = beamOpacity;
    if (haloMatRef.current) haloMatRef.current.opacity = beamOpacity * 0.25;
    if (glowMatRef.current) glowMatRef.current.opacity = beamOpacity * 0.8;
    if (lensMatRef.current)
      lensMatRef.current.emissiveIntensity = beamOn ? 0.4 + beamOpacity : 0;

    // aim: viewport lens → sphere surface point (slow scan wobble)
    if (beamRef.current && haloRef.current && glowRef.current) {
      tmpA.set(0, cy, 2.05); // lens
      tmpDir.set(
        0.18 + (ui.reduceMotion ? 0 : 0.1 * Math.sin(t * 0.3)),
        0.12 + (ui.reduceMotion ? 0 : 0.08 * Math.cos(t * 0.23)),
        1,
      );
      tmpB.set(sx, cy + syy, sz).addScaledVector(tmpDir.normalize(), SPHERE_R);
      const len = tmpA.distanceTo(tmpB);
      for (const m of [beamRef.current, haloRef.current]) {
        m.position.copy(tmpA).add(tmpB).multiplyScalar(0.5);
        m.scale.set(1, len, 1);
        tmpDir.copy(tmpB).sub(tmpA).normalize();
        m.quaternion.setFromUnitVectors(UP, tmpDir);
      }
      glowRef.current.position.copy(tmpB);
      const glowScale = 1 + amp * 1.5;
      glowRef.current.scale.setScalar(glowScale);
    }
  });

  const railMat = (
    <meshStandardMaterial color="#1a222d" metalness={0.6} roughness={0.55} />
  );

  return (
    <group>
      {/* ================= XYZ STAGE ================= */}
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover("stage");
        }}
        onPointerOut={() => setHover(null)}
      >
        {/* base plate + standoffs */}
        <mesh position={[0, BASE_TOP - 0.05, 0]}>
          <boxGeometry args={[1.7, 0.1, 0.9]} />
          {railMat}
        </mesh>
        {[
          [-0.7, -0.35],
          [0.7, -0.35],
          [-0.7, 0.35],
          [0.7, 0.35],
        ].map(([x, z]) => (
          <mesh key={`${x},${z}`} position={[x, 0.85, z]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 10]} />
            {railMat}
          </mesh>
        ))}
        {/* travel ticks along front edge (X axis scale) */}
        {ticksX.map((x) => (
          <mesh key={x} position={[x, BASE_TOP + 0.005, 0.44]}>
            <boxGeometry args={[0.008, 0.012, x % 0.5 === 0 ? 0.07 : 0.04]} />
            <meshStandardMaterial color="#2c3d52" metalness={0.4} roughness={0.6} />
          </mesh>
        ))}
        {/* A/B blinded position markers (±20 mm) */}
        <mesh position={[-20 * MM_TO_U, BASE_TOP + 0.05, 0.36]}>
          <coneGeometry args={[0.045, 0.11, 4]} />
          <meshStandardMaterial
            color="#f0b64c"
            emissive="#f0b64c"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[20 * MM_TO_U, BASE_TOP + 0.05, 0.36]}>
          <coneGeometry args={[0.045, 0.11, 4]} />
          <meshStandardMaterial
            color="#9d8df1"
            emissive="#9d8df1"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* X rails + lead screw */}
        {[-0.32, 0.32].map((z) => (
          <mesh key={z} position={[0, 1.1, z]}>
            <boxGeometry args={[1.6, 0.05, 0.07]} />
            {railMat}
          </mesh>
        ))}
        <mesh position={[0, 1.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.028, 0.028, 1.5, 10]} />
          <meshStandardMaterial color="#4b5b6e" metalness={0.85} roughness={0.35} />
        </mesh>

        {/* ---- X carriage ---- */}
        <group ref={xRef}>
          <mesh position={[0, X_CARR_Y, 0]}>
            <boxGeometry args={[0.7, 0.09, 0.75]} />
            {railMat}
          </mesh>
          {/* Z rails + screw on X carriage */}
          {[-0.26, 0.26].map((x) => (
            <mesh key={x} position={[x, X_CARR_Y + 0.07, 0]}>
              <boxGeometry args={[0.07, 0.05, 0.85]} />
              {railMat}
            </mesh>
          ))}
          <mesh position={[0, X_CARR_Y + 0.07, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.026, 0.026, 0.8, 10]} />
            <meshStandardMaterial color="#4b5b6e" metalness={0.85} roughness={0.35} />
          </mesh>

          {/* ---- Z carriage ---- */}
          <group ref={zRef}>
            <mesh position={[0, Z_CARR_Y, 0]}>
              <boxGeometry args={[0.55, 0.09, 0.55]} />
              {railMat}
            </mesh>
            {/* Y column */}
            <mesh position={[0.16, 1.75, -0.18]}>
              <boxGeometry args={[0.14, 0.72, 0.14]} />
              {railMat}
            </mesh>
            <mesh position={[0.16, 1.75, -0.18]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.05, 0.66, 0.05]} />
              <meshStandardMaterial color="#4b5b6e" metalness={0.85} roughness={0.35} />
            </mesh>

            {/* ---- Y carriage + payload ---- */}
            <group ref={yRef}>
              <mesh position={[0, Y_CARR_Y, -0.05]}>
                <boxGeometry args={[0.34, 0.12, 0.34]} />
                {railMat}
              </mesh>
              {/* stem */}
              <mesh position={[0, (STEM_BOT + STEM_TOP) / 2, 0]}>
                <cylinderGeometry
                  args={[0.045, 0.05, STEM_TOP - STEM_BOT, 12]}
                />
                <meshStandardMaterial color="#6b5a4a" metalness={0.8} roughness={0.4} />
              </mesh>
              {/* drive piezo disc on stem */}
              <mesh
                position={[0, STEM_TOP - 0.12, 0]}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setHover("piezo");
                }}
                onPointerOut={() => setHover(null)}
              >
                <cylinderGeometry args={[0.1, 0.1, 0.05, 20]} />
                <meshStandardMaterial
                  ref={piezoMatRef}
                  color="#20262e"
                  metalness={0.5}
                  roughness={0.5}
                  emissive="#f0b64c"
                  emissiveIntensity={0}
                />
              </mesh>
              {/* copper sphere (DUT) */}
              <mesh
                ref={sphereRef}
                position={[0, cy, 0]}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setHover("sphere");
                }}
                onPointerOut={() => setHover(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  useChamberUi.getState().setSphereStatOpen(true);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  useChamberUi.getState().requestDolly();
                }}
              >
                <sphereGeometry args={[SPHERE_R, 48, 32]} />
                <meshStandardMaterial
                  ref={sphereMatRef}
                  color="#c47a4a"
                  metalness={1}
                  roughness={0.28}
                  emissive="#c47a4a"
                  emissiveIntensity={0.06}
                />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* ================= LDV ================= */}
      {/* lens at viewport */}
      <mesh position={[0, cy, 2.12]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial
          ref={lensMatRef}
          color="#0d3a38"
          metalness={0.3}
          roughness={0.2}
          emissive="#2dd4c8"
          emissiveIntensity={0}
        />
      </mesh>
      {/* beam core */}
      <mesh
        ref={beamRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover("ldv");
        }}
        onPointerOut={() => setHover(null)}
      >
        <cylinderGeometry args={[0.008, 0.008, 1, 8, 1, true]} />
        <meshBasicMaterial
          ref={beamMatRef}
          color="#2dd4c8"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* beam halo */}
      <mesh ref={haloRef}>
        <cylinderGeometry args={[0.035, 0.035, 1, 8, 1, true]} />
        <meshBasicMaterial
          ref={haloMatRef}
          color="#2dd4c8"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* surface spot glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshBasicMaterial
          ref={glowMatRef}
          color="#7ef0e6"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
