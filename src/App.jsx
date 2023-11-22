import { Pause, Play } from "lucide-react";
import { useState, useEffect } from "react";

import { CanvasModel } from "./Components/CanvasModel";

function App() {
  const [audioVar, setAuidoVar] = useState(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const audio = new Audio("fool.mp3");
    setAuidoVar(audio);
  }, []);

  useEffect(() => {
    if (audioVar)
      play ? [audioVar.play(), (audioVar.loop = true)] : audioVar.pause();
  }, [play]);

  const handleToggle = () => {
    setPlay((prev) => !play);
  };

  const isLargeDevice = window.innerWidth > 1024;

  return (
    <div>
      <button
        className="fixed bottom-6 right-6 z-[99999]"
        onClick={handleToggle}
      >
        {play ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>

      {!isLargeDevice ? (
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
      ) : (
        <div className="w-screen h-screen hidden lg:block">
          <CanvasModel />
        </div>
      )}
    </div>
  );
}

export default App;
