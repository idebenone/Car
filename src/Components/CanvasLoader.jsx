import { Html, useProgress } from "@react-three/drei";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center>
      <p className="text-8xl font-bold">{progress.toFixed(0)}</p>
    </Html>
  );
};
