import { Canvas } from "@react-three/fiber";
import Plane from "./Plane";
import { OrbitControls, Sky } from "@react-three/drei";
import { Temple_Exterior } from "./playerBro/model/Temple_Exterior";
import { Physics } from "@react-three/cannon";

export default function App() {
  return (
    <div className="h-dvh w-screen overflow-x-hidden">
      <Canvas shadows camera={{ position: [0, 10, 15], fov: 60 }}>
        <Sky
          distance={450000}
          sunPosition={[0, -1, 0]}
          inclination={0.6}
          azimuth={0.25}
        />
        <ambientLight intensity={0.05} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffffff" />
        <OrbitControls />
        <spotLight
          position={[0, 20, 0]}
          intensity={1000}
          penumbra={1}
        ></spotLight>
        <Physics>
          <mesh>
            <Temple_Exterior />
            <Plane />
          </mesh>
        </Physics>
      </Canvas>
    </div>
  );
}
