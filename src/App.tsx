import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Plane from "./Plane";
import { OrbitControls, Sky } from "@react-three/drei";
import { Temple_Exterior } from "./playerBro/model/Temple_Exterior";
import { Temple_Interior } from "./playerBro/model/Temple_Interior";
import { Physics } from "@react-three/cannon";
import { TeleportController } from "./TeleportController";
import TooltipCustom from "./components/Tooltip";

export default function App() {
  const [insideTemple, setInsideTemple] = useState(false);

  const interiorCameraPos: [number, number, number] = [0, 10, 7];
  const exteriorCameraPos: [number, number, number] = [0, 10, 25];

  return (
    <div className="h-dvh w-screen overflow-hidden relative">
      <Canvas shadows camera={{ position: exteriorCameraPos, fov: 60 }}>
        <Sky
          distance={450000}
          sunPosition={[0, -1, 0]}
          inclination={0.6}
          azimuth={0.25}
        />
        <ambientLight intensity={0.05} />
        <pointLight position={[10, 10, 10]} intensity={50} color="#ffffff" />
        <OrbitControls makeDefault />
        <spotLight position={[0, 20, 0]} intensity={1000} penumbra={1} />

        <TeleportController
          inside={insideTemple}
          interiorPos={interiorCameraPos}
          exteriorPos={exteriorCameraPos}
        />

        <Physics>
          <mesh>
            {!insideTemple && <Temple_Exterior />}
            <Plane />
            {insideTemple && <Temple_Interior />}
            {/* <Player /> */}
          </mesh>
        </Physics>
      </Canvas>

      <div className="absolute bottom-10 flex z-50 text-white justify-center w-full text-4xl">
        <button
          onClick={() => setInsideTemple(!insideTemple)}
          className="bg-amber-600 p-5 rounded-4xl z-50"
        >
          {insideTemple ? "Exit Temple" : "Enter Temple"}
        </button>
      </div>

      {insideTemple && (
        <div>
          <div className="absolute top-40 right-57 sm:right-90 md:right-110 lg:right-150 xl:right-150 2xl:right-180 z-50">
            <TooltipCustom text="The idol of Goddess Durga along with Ganesha (leftmost), Lakshmi (left), Saraswati (right) and Kartikeya (rightmost)." />
          </div>
          <div className="absolute top-150 left-50 lg:left-100 xl:left-85 xl:top-40 z-50">
            <TooltipCustom text="A pandel for Goddess Durga" />
          </div>
        </div>
      )}
    </div>
  );
}
