import { useRef } from 'react';

import { useLoader, ThreeElements } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Floor = (props: ThreeElements['mesh']) => {
  const texture = useLoader(TextureLoader, 'src/assets/floor.png');

  return (
    <mesh receiveShadow {...props}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Floor;
