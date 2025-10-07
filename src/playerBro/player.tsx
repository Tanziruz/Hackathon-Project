import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import keyPressuriser from "./keyPressuriser";

export default function Player() {
  const ref = useRef<THREE.Mesh>(null);
  const speed = 0.1;

  // TEHKDLSNVFPHIOEWD DEOIFBEWOHWODWHODF EWHDSLJDSCBDIWODH EWHEWWEBFQWS=FWEJFBWI FEWUOFHWEOIF EW YES IR nvm i have gone mad
  const keys = keyPressuriser(["w", "a", "s", "d"]);

  useFrame(() => {
    if (!ref.current) return;

    const direction = new THREE.Vector3();
    if (keys.w) direction.z -= 1;
    if (keys.s) direction.z += 1;
    if (keys.a) direction.x -= 1;
    if (keys.d) direction.x += 1;

    if (direction.length() > 0) {
      direction.normalize();
      ref.current.position.addScaledVector(direction, speed);

      const angle = Math.atan2(direction.x, direction.z);
      ref.current.rotation.y += (angle - ref.current.rotation.y) * 0.1;
    }

    ref.current.position.y = 1 + Math.sin(Date.now() * 0.002) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
