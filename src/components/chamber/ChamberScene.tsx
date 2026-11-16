import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Grid,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { useSim } from "@/sim/store";
import Vessel from "./Vessel";
import Interior from "./Interior";
import { Bench, Haze, PumpStack } from "./PumpStack";
import { CHAMBER, MM_TO_U, useChamberUi } from "./chamberUi";

const DEFAULT_POS = new THREE.Vector3(4.6, 3.4, 5.4);
const DEFAULT_TG = new THREE.Vector3(0, 1.9, 0);
const START_POS = DEFAULT_TG.clone()
  .add(DEFAULT_POS.clone().sub(DEFAULT_TG).multiplyScalar(1.9));
const FRAME_POS = new THREE.Vector3(1.8, 2.2, 3.1);
const FRAME_TG = new THREE.Vector3(0, 1.4, 0);

interface CamTween {
  t0: number;
  durMs: number;
  fromPos: THREE.Vector3;
  toPos: THREE.Vector3;
  fromTg: THREE.Vector3;
  toTg: THREE.Vector3;
}

const easeOutCubic = (p: number) => 1 - Math.pow(1 - p, 3);
const easeInOutCubic = (p: number) =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

/** Camera rig: fly-in on mount, idle sway until first interaction,
 *  reset/frame/dolly tweens from UI cues. */
function CameraRig() {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const interacted = useRef(false);
  const flyT = useRef(useChamberUi.getState().reduceMotion ? 1 : 0);
  const swayOff = useRef(0);
  const tween = useRef<CamTween | null>(null);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    const startTween = (
      toPos: THREE.Vector3,
      toTg: THREE.Vector3,
      durMs = 800,
    ) => {
      tween.current = {
        t0: performance.now(),
        durMs,
        fromPos: camera.position.clone(),
        fromTg: controls.target.clone(),
        toPos: toPos.clone(),
        toTg: toTg.clone(),
      };
      interacted.current = true;
    };
    const unsub = useChamberUi.subscribe((s, prev) => {
      if (s.resetViewTick !== prev.resetViewTick) {
        startTween(DEFAULT_POS, DEFAULT_TG, s.reduceMotion ? 0 : 800);
      }
      if (s.frameStageTick !== prev.frameStageTick) {
        startTween(FRAME_POS, FRAME_TG, s.reduceMotion ? 0 : 800);
      }
      if (s.dollyTick !== prev.dollyTick) {
        const st = useSim.getState().stage;
        const sp = new THREE.Vector3(
          st.x * MM_TO_U,
          CHAMBER.cy + st.y * MM_TO_U,
          st.z * MM_TO_U,
        );
        startTween(
          sp.clone().add(new THREE.Vector3(1.1, 0.55, 1.5)),
          sp,
          s.reduceMotion ? 0 : 800,
        );
      }
    });
    return unsub;
  }, [camera]);

  useFrame((state, dt) => {
    const controls = controlsRef.current;
    if (!controls) return;
    const ui = useChamberUi.getState();

    // mount fly-in (900 ms ease-out)
    if (flyT.current < 1) {
      flyT.current = Math.min(1, flyT.current + dt / 0.9);
      const e = easeOutCubic(flyT.current);
      camera.position.lerpVectors(START_POS, DEFAULT_POS, e);
      controls.target.copy(DEFAULT_TG);
      controls.update();
      return;
    }

    // scripted tweens (reset / frame / dolly)
    if (tween.current) {
      const tw = tween.current;
      const p =
        tw.durMs <= 0 ? 1 : Math.min(1, (performance.now() - tw.t0) / tw.durMs);
      const e = easeInOutCubic(p);
      camera.position.lerpVectors(tw.fromPos, tw.toPos, e);
      controls.target.lerpVectors(tw.fromTg, tw.toTg, e);
      controls.update();
      if (p >= 1) tween.current = null;
      return;
    }

    // idle sway ±2° over 30 s until first interaction
    if (!interacted.current && !ui.reduceMotion) {
      const t = state.clock.elapsedTime;
      const off = THREE.MathUtils.degToRad(2) * Math.sin((t * Math.PI * 2) / 30);
      const delta = off - swayOff.current;
      swayOff.current = off;
      camera.position.sub(controls.target);
      camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), delta);
      camera.position.add(controls.target);
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.08}
      minDistance={1.2}
      maxDistance={18}
      maxPolarAngle={1.55}
      target={DEFAULT_TG}
      onStart={() => {
        interacted.current = true;
        tween.current = null;
      }}
    />
  );
}

/** 3-point rig + teal viewport rim light; dims to 5 % when facility is dark. */
function Lights() {
  const keyRef = useRef<THREE.DirectionalLight>(null);
  const fillRef = useRef<THREE.PointLight>(null);
  const rimRef = useRef<THREE.PointLight>(null);
  const ambRef = useRef<THREE.AmbientLight>(null);

  useFrame((_, dt) => {
    const powered = useSim.getState().power === "FACILITY_ON";
    const k = powered ? 1 : 0.05;
    const d = (v: number, target: number) =>
      THREE.MathUtils.damp(v, target, 4, dt);
    if (keyRef.current) keyRef.current.intensity = d(keyRef.current.intensity, 1.7 * k);
    if (fillRef.current) fillRef.current.intensity = d(fillRef.current.intensity, 24 * k);
    if (rimRef.current) rimRef.current.intensity = d(rimRef.current.intensity, 10 * k);
    if (ambRef.current) ambRef.current.intensity = d(ambRef.current.intensity, 0.3 * k);
  });

  return (
    <>
      <ambientLight ref={ambRef} intensity={0.3} color="#8fa8c0" />
      <directionalLight ref={keyRef} position={[4, 7, 5]} intensity={1.7} color="#dfe8f2" />
      <pointLight ref={fillRef} position={[-5, 3, 4]} intensity={24} color="#5aa2f0" distance={20} decay={2} />
      <pointLight
        ref={rimRef}
        position={[0, CHAMBER.cy + 0.5, 5]}
        intensity={10}
        color="#2dd4c8"
        distance={12}
        decay={2}
      />
    </>
  );
}

/** Applies the fan-vibration fault tremor to the whole world (8 Hz, subtle). */
function WorldGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    const s = useSim.getState();
    const ui = useChamberUi.getState();
    if (s.faults["fan-vibration"] && s.power === "FACILITY_ON" && !ui.reduceMotion) {
      const t = state.clock.elapsedTime;
      g.position.x = Math.sin(t * Math.PI * 2 * 8) * 0.004;
      g.position.y = Math.cos(t * Math.PI * 2 * 8 * 1.13) * 0.003;
    } else {
      g.position.x = 0;
      g.position.y = 0;
    }
  });
  return <group ref={ref}>{children}</group>;
}

/** Full 3D chamber scene (Canvas + contents). */
export default function ChamberScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const gridVisible = useChamberUi((s) => s.gridVisible);

  // pause render loop when offscreen (design.md §7 performance guardrail)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const initialCamera = useMemo(
    () => ({
      position: START_POS.toArray() as [number, number, number],
      fov: 42,
      near: 0.1,
      far: 60,
    }),
    [],
  );

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 2]}
        camera={initialCamera}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.localClippingEnabled = true;
          gl.setClearColor("#05080d");
        }}
        style={{ cursor: "grab" }}
      >
        <fog attach="fog" args={["#05080d", 9, 26]} />
        <Lights />
        <Environment resolution={128} frames={1}>
          <Lightformer
            intensity={2}
            position={[0, 5, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[8, 8, 1]}
            color="#9fb4c8"
          />
          <Lightformer
            intensity={1.1}
            position={[-5, 2, 2]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[6, 3, 1]}
            color="#2dd4c8"
          />
          <Lightformer
            intensity={0.9}
            position={[5, 1, -2]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[6, 3, 1]}
            color="#f0b64c"
          />
        </Environment>

        <WorldGroup>
          <Bench />
          <Vessel />
          <Interior />
          <PumpStack />
          <Haze />
        </WorldGroup>

        {gridVisible && (
          <Grid
            position={[0, 0.006, 0]}
            args={[10, 10]}
            cellSize={0.65}
            sectionSize={3.25}
            cellColor="#1e2a38"
            sectionColor="#2c3d52"
            cellThickness={0.6}
            sectionThickness={1}
            fadeDistance={16}
            fadeStrength={1.5}
          />
        )}
        <ContactShadows
          position={[0, 0.01, 0]}
          scale={14}
          blur={2.6}
          far={6}
          opacity={0.55}
          frames={Infinity}
        />

        <CameraRig />
      </Canvas>
    </div>
  );
}
