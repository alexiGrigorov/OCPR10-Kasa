import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/style.scss";

const rootElement = document.getElementById("root");
rootElement.classList.add("grid-rows-hmf", "grid", "min-h-screen");
const root = createRoot(rootElement);

root.render(<App />);
