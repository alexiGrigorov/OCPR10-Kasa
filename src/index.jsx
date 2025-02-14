import ReactDOM from "react-dom/client";
import "./scss/main.scss";

import App from "./App";

const rootElement = document.getElementById("root");
rootElement.classList.add("site", "wrapper-grid");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
