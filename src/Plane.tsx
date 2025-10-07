import { usePlane } from "@react-three/cannon";
import Player from "./playerBro/player";

export default function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshPhongMaterial color="#3a5f0b" />
      </mesh>

      <Player />
    </>
  );
}
