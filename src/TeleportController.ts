import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export function TeleportController({
  inside,
  interiorPos,
  exteriorPos,
}: {
  inside: boolean;
  interiorPos: [number, number, number];
  exteriorPos: [number, number, number];
}) {
  const { camera } = useThree();
  const target = useRef<[number, number, number]>(exteriorPos);
  const targetRotation = useRef<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    target.current = inside ? interiorPos : exteriorPos;

    if (inside) {
      targetRotation.current = [6, 0, 0];
    } else {
      targetRotation.current = [0, 0, 0];
    }
  }, [inside, interiorPos, exteriorPos]);

  useFrame(() => {
    const lerp = 0.08; //this value seemed to work best ngl.

    camera.position.x += (target.current[0] - camera.position.x) * lerp;
    camera.position.y += (target.current[1] - camera.position.y) * lerp;
    camera.position.z += (target.current[2] - camera.position.z) * lerp;

    camera.rotation.x += (targetRotation.current[0] - camera.rotation.x) * lerp;
    camera.rotation.y += (targetRotation.current[1] - camera.rotation.y) * lerp;
    camera.rotation.z += (targetRotation.current[2] - camera.rotation.z) * lerp;
  });

  return null;
}
