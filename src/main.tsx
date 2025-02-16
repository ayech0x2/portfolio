import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import "./css/normalize.css";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
gsap.registerPlugin(useGSAP);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
