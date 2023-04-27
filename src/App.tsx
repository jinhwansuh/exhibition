import { Canvas, useFrame } from '@react-three/fiber';
import { Sky, OrbitControls, Stats } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import Loader from './components/Loader';
import Ball from './components/Ball';

function App() {
  const ref = useRef(null!);

  return (
    <>
      <Canvas camera={{ position: [1, 2, 4] }}>
        <Suspense fallback={<Loader />}>
          <Ball floor={ref} />

          <OrbitControls />
          <axesHelper args={[5]} />
          <gridHelper ref={ref} />
          <Stats showPanel={0} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
