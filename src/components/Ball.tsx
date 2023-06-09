import { Vector3, Quaternion, Mesh } from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import useKeyboard from '../hooks/useKeyboard';

function Ball({ floor }) {
  const ref = useRef<Mesh>(null!);
  const keyMap = useKeyboard();

  // const v = useMemo(() => new Vector3(), []);
  // const q = useMemo(() => new Quaternion(), []);
  // const angularVelocity = useMemo(() => new Vector3(), []);

  useFrame((_, delta) => {
    keyMap['KeyW'] && (ref.current.position.x += delta * 5);
    keyMap['KeyS'] && (ref.current.position.x -= delta * 5);
    keyMap['KeyA'] && (ref.current.position.z -= delta * 5);
    keyMap['KeyD'] && (ref.current.position.z += delta * 5);

    // q.setFromAxisAngle(angularVelocity, delta).normalize();
    // ref.current.applyQuaternion(q);

    // angularVelocity.lerp(v, 0.01); // slow down the roll

    // floor.current.position.x += angularVelocity.z * delta;
    // floor.current.position.z -= angularVelocity.x * delta;

    // floor.current.position.x = floor.current.position.x % 10;
    // floor.current.position.z = floor.current.position.z % 10;
  });

  return (
    <mesh ref={ref} position-y={0.3}>
      <sphereGeometry />
      <meshNormalMaterial wireframe />
    </mesh>
  );
}

export default Ball;
