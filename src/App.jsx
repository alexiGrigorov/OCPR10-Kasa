import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import E404 from "./pages/E404";
import Rental from "./pages/Rental";

// const data = fetch("./services/api/logements.json").then((response) =>
//   response.json(),
// );

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/a-propos", element: <About /> },
  { path: "/rental", element: <Rental /> },
  { path: "*", element: <E404 /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
