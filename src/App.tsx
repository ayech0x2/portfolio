import { Canvas } from "@react-three/fiber";
import { useAtomValue } from "jotai";
import * as React from "react";
import * as THREE from "three";
import { entranceAnimationFinishedAtom, loadingAtom } from "./atoms";
import Footer from "./components/footer";
import Header from "./components/header";
import LandscapeMode from "./components/landscape-mode";
import LoadingOverlay from "./components/loading-overlay";
import Mouse from "./components/mouse";
import Scene from "./components/scene";
import Utils from "./components/utils";
import useScreenOrientation from "./hooks/use-screen-orientation";

function App() {
  const loading = useAtomValue(loadingAtom);

  const portrait = useScreenOrientation();

  const entranceAnimationFinished = useAtomValue(entranceAnimationFinishedAtom);

  const [mouseCoords, setMouseCoords] = React.useState({ x: 0, y: 0 });

  const canvasRef = React.useRef(null);

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

  if (loading) return <LoadingOverlay />;

  if (!loading && portrait) return <LandscapeMode />;

  return (
    <React.Fragment>
      {entranceAnimationFinished && <Utils />}
      <Mouse {...mouseCoords} />
      <Header />
      <Footer />
      <div id="canvas-container">
        <Canvas
          ref={canvasRef}
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
