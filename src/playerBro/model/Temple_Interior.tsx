import React from "react";
import { useGLTF } from "@react-three/drei";

export function Temple_Interior() {
  const { scene } = useGLTF("/Temple_Interior.glb"); // Adjust the path to your GLB file

  return <primitive object={scene} />;
}
