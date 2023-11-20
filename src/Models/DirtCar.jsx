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
import { Suspense, useEffect } from "react";
import { CanvasLoader } from "../Components/CanvasLoader";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

const DirtCar = () => {
  const vAudio = document.getElementById("divAudio");
  const [play, setPlay] = useState(false);

  const sheet = getProject("Dirt Car", { state: carState }).sheet("Sheet");

  useEffect(() => {
    const vAudio = document.getElementById("divAudio");
    if (vAudio) {
      if (play) {
        vAudio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        vAudio.pause();
      }
    }
  }, [play]);

  const isLargeDevice = window.innerWidth > 1024;

  if (!isLargeDevice) {
    return (
      <div>
        {play ? (
          <button
            className="fixed top-3 right-4 z-[99999] border-black border py-1 px-2"
            onClick={() => {
              if (play) {
                setPlay(false);
                vAudio.pause();
              }
            }}
          >
            <Pause className="h-5 w-5" />
          </button>
        ) : (
          <button
            className="fixed top-3 right-4 z-[99999]  border-black border py-1 px-2"
            onClick={() => {
              if (!play) {
                setPlay(true);
                vAudio.play();
              }
            }}
          >
            <Play className="h-5 w-5" />
          </button>
        )}

        <audio id="divAudio" loop>
          <source src="/fool.mp3" type="audio/mp3"></source>
        </audio>

        <div className="flex flex-col lg:hidden h-screen w-screen justify-center items-center">
          <p className="text-4xl font-extrabold text-center">
            Sorry Mate! Only Available on large devices :(
          </p>

          <a
            href="https://github.com/idebenone"
            target="_blank"
            className="font-bold text-xl mt-4 text-gray-600"
          >
            Vineeth G
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {play ? (
          <button
            className="fixed top-3 right-4 z-[99999] border-black border py-1 px-2"
            onClick={() => {
              if (play) {
                setPlay(false);
                vAudio.pause();
              }
            }}
          >
            <Pause className="h-5 w-5" />
          </button>
        ) : (
          <button
            className="fixed top-3 right-4 z-[99999]  border-black border py-1 px-2"
            onClick={() => {
              if (!play) {
                setPlay(true);
                vAudio.play();
              }
            }}
          >
            <Play className="h-5 w-5" />
          </button>
        )}

        <audio id="divAudio" loop>
          <source src="/fool.mp3" type="audio/mp3"></source>
        </audio>
        <div className="w-screen h-screen hidden lg:block">
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
        </div>
      </div>
    );
  }
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
