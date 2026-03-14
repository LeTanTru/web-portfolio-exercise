import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Ball = ({ icon, position }) => {
  const [decal] = useTexture([icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Single-canvas component — renders ALL balls in one WebGL context
export const TechCanvas = ({ technologies }) => {
  const cols = 5;
  const spacing = 3.5;
  const rows = Math.ceil(technologies.length / cols);

  // Calculate camera distance to fit all rows
  const canvasHeight = rows * spacing + spacing;

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{ position: [0, 0, 14], fov: 60 }}
      style={{ height: `${rows * 120 + 60}px` }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <Suspense fallback={null}>
        {technologies.map((tech, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);
          const x = (col - (cols - 1) / 2) * spacing;
          const y = ((rows - 1) / 2 - row) * spacing;
          return <Ball key={tech.name} icon={tech.icon} position={[x, y, 0]} />;
        })}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Keep BallCanvas as default for any other single-ball usage
const BallCanvasInner = ({ icon }) => {
  const controlsRef = useRef();
  const resetProgress = useRef(0);
  const isResetting = useRef(false);
  const startRotation = useRef({ azimuthal: 0, polar: 0 });
  const resetTimeout = useRef(null);

  const handleStart = () => {
    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
      resetTimeout.current = null;
    }
    isResetting.current = false;
    resetProgress.current = 0;
  };

  const handleEnd = () => {
    if (!controlsRef.current) return;
    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => {
      if (!controlsRef.current) return;
      startRotation.current = {
        azimuthal: controlsRef.current.getAzimuthalAngle(),
        polar: controlsRef.current.getPolarAngle()
      };
      resetProgress.current = 0;
      isResetting.current = true;
      resetTimeout.current = null;
    }, 500);
  };

  useFrame((_, delta) => {
    if (!isResetting.current || !controlsRef.current) return;
    const controls = controlsRef.current;
    resetProgress.current += delta * 0.5;
    if (resetProgress.current >= 1) {
      controls.reset();
      isResetting.current = false;
      return;
    }
    const t = 1 - Math.pow(1 - resetProgress.current, 2);
    const azimuthal = THREE.MathUtils.lerp(
      startRotation.current.azimuthal,
      0,
      t
    );
    const polar = THREE.MathUtils.lerp(
      startRotation.current.polar,
      Math.PI / 2,
      t
    );
    const radius = controls.object.position.length();
    controls.object.position.x = radius * Math.sin(polar) * Math.sin(azimuthal);
    controls.object.position.y = radius * Math.cos(polar);
    controls.object.position.z = radius * Math.sin(polar) * Math.cos(azimuthal);
    controls.object.lookAt(controls.target);
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        onStart={handleStart}
        onEnd={handleEnd}
      />
      <Ball icon={icon} />
    </>
  );
};

const BallCanvas = ({ icon }) => (
  <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true, antialias: true }}>
    <ambientLight intensity={0.25} />
    <directionalLight position={[0, 0, 0.05]} />
    <Suspense fallback={<CanvasLoader />}>
      <BallCanvasInner icon={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
