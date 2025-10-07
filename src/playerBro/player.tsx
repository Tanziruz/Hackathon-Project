import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import useKeyPress from "./keyPressuriser";

export default function Player() {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [20, 0, 20],
    args: [1, 1, 1],
  }));

  const speed = 5; //adjust this thingy's speeeeeed.
  const keys = useKeyPress(["w", "a", "s", "d"]);

  useFrame(() => {
    const direction = new THREE.Vector3();
    if (keys.w) direction.z -= 1;
    if (keys.s) direction.z += 1;
    if (keys.a) direction.x -= 1;
    if (keys.d) direction.x += 1;

    if (direction.length() > 0) {
      direction.normalize();
      api.velocity.set(direction.x * speed, 0, direction.z * speed);

      const angle = Math.atan2(direction.x, direction.z);
      ref.current.rotation.y += (angle - ref.current.rotation.y) * 0.1;
    }
  });

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
