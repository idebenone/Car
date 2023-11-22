import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, useGLTF, ScrollControls } from "@react-three/drei";
import { val, getProject } from "@theatre/core";
import {
  PerspectiveCamera,
  useCurrentSheet,
  SheetProvider,
} from "@theatre/r3f";

import carState from "../CarState.json";

import Overlay from "../Components/Overlay";
import { CanvasLoader } from "../Components/CanvasLoader";

const Scene = () => {
  const model = useGLTF("/che.glb");
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
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
};

export const CanvasModel = () => {
  const sheet = getProject("Dirt Car", { state: carState }).sheet("Sheet");

  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <ScrollControls pages={5}>
            <Overlay />
            <SheetProvider sheet={sheet}>
              <Scene />
            </SheetProvider>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};
