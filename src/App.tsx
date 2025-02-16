import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as React from "react";
import * as THREE from "three";
import Footer from "./components/footer";
import Header from "./components/header";
import Lenis from "./components/lenis";
import LoadingOverlay from "./components/loading-overlay";
import Mouse from "./components/mouse";
import Scene from "./components/scene";

function App() {
  const { progress } = useProgress();

  const [mouseCoords, setMouseCoords] = React.useState({ x: 0, y: 0 });

  const mouseHandler = React.useCallback(
    (e: MouseEvent) => {
      setMouseCoords({ x: e.clientX, y: e.clientY });
    },
    [setMouseCoords]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseHandler);
    return () => window.removeEventListener("mousemove", mouseHandler);
  }, [mouseHandler]);

  if (progress < 100) return <LoadingOverlay />;
  return (
    <React.Fragment>
      <Mouse {...mouseCoords} />
      <Lenis />
      <Header />
      <Footer />
      <div id="canvas-container">
        <Canvas
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </React.Fragment>
  );
}

export default App;
