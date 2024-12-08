import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import LogIn from "./LogIn.tsx";
import "../CSS/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LogIn />
  </StrictMode>,
);
