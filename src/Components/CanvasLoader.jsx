import { Html, useProgress } from "@react-three/drei";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center>
      <p>{progress.toFixed(0)}%</p>
    </Html>
  );
};
