import { useGLTF } from "@react-three/drei";

interface StreetlightProps {
  position: number[];
}

export function Streetlight({ position }: StreetlightProps) {
  const { scene } = useGLTF("/Streetlight.glb");

  return <primitive object={scene} position={position} />;
}
