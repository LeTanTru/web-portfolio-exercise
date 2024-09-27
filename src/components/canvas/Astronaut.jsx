import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { moon } from '../../assets/index';

const Astronaut = () => {
  return (
    <div className='flex h-screen snap-center flex-col items-center justify-between'>
      <div className='flex h-full w-[1400px] snap-center justify-between md:w-full md:flex-col md:items-center md:justify-center'>
        <div className='flex-3 relative md:w-full md:flex-1'>
          <Canvas className="w-[800px] h-[600px]">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                  color='#3d1c56'
                  attach='material'
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img
            src={moon}
            alt='moon'
            className='absolute inset-0 m-auto h-[300px] w-[300px] animate object-contain md:h-[400px] md:w-[600px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Astronaut;
