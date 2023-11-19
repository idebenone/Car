import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, useGLTF } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

import carState from "../CarState.json";
import Overlay from "../Components/Overlay";

const DirtCar = () => {
  const sheet = getProject("Dirt Car", { state: carState }).sheet("Sheet");

  return (
    <div className="canvas-container">
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ScrollControls pages={5}>
          <Overlay />
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </div>
  );
};
useGLTF.preload("/che.glb");

export default DirtCar;

function Scene() {
  const model = useGLTF("/che.glb");
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    //length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });
  return (
    <>
      <ambientLight />
      <primitive object={model.scene} />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 2, 10]}
        fov={50}
      />
    </>
  );
}
