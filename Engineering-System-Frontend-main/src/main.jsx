import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/print.css";
import App from "./App.jsx";

const muteConsole = () => undefined;
window.console.log = muteConsole;
window.console.info = muteConsole;
window.console.warn = muteConsole;
window.console.error = muteConsole;
window.console.debug = muteConsole;
window.console.trace = muteConsole;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
