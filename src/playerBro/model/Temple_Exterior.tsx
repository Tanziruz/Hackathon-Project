import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useBox, Debug } from "@react-three/cannon";

const boundingPosition = 18;
const position = [0, 10, 0];

export function Temple_Exterior() {
  const { scene } = useGLTF("/Temple_Exterior.glb");

  const [ref] = useBox(() => ({
    args: [boundingPosition, boundingPosition, boundingPosition],
    position, //avg ts getting angry. will fix later. probably.
  }));

  useEffect(() => {
    scene.scale.set(2, 2, 2);
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material.color.set("yellow");
      }
    });
  }, [scene]);

  return (
    <Debug color="blue">
      <primitive ref={ref} object={scene} position={position} />
    </Debug>
  );
}
