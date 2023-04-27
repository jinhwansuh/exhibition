import { Canvas, useFrame } from '@react-three/fiber';
import { Sky, OrbitControls, Stats } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Loader from './components/Loader';
import Ball from './components/Ball';
import { Position } from './types/materials';
import Box from './components/Box';
import Floor from './components/Floor';

function App() {
  const ref = useRef(null!);
  const [obstacles, setObstacles] = useState<Position[]>([]);

  useEffect(() => {
    const newObstacles: Position[] = [];
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * 10 - 5;
      const y = 0;
      const z = Math.random() * 10 - 5;
      newObstacles.push([x, y, z]);
    }
    setObstacles([...newObstacles]);
  }, []);

  return (
    <>
      <Canvas camera={{ position: [-10, 7, 3] }}>
        <Suspense fallback={<Loader />}>
          <Ball floor={ref} />

          {obstacles.map((obstacle, i) => (
            <Box key={i} scale={[1, 1, 1]} position={obstacle} />
          ))}

          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          <Floor rotation={[-Math.PI / 2, 0, 0]} />
          {/* sky */}
          <Sky sunPosition={[100, 20, 100]} />
          {/* camera */}
          <OrbitControls />
          {/* axes */}
          <axesHelper args={[5]} />
          {/* grid helper */}
          <gridHelper ref={ref} scale={[2, 2, 2]} />
          {/* frame setting */}
          <Stats showPanel={0} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
