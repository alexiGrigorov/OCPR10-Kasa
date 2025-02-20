import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { throwNotFoundResponse } from "./utils/httpResponses";

import RootLayout from "./Layouts/Root";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import RentalPage from "./pages/Rental";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        id: "mainApp",
        element: <Outlet />,
        errorElement: <ErrorPage />,
        loader: apiDataLoader,
        children: [
          { index: true, element: <HomePage /> },
          { path: "a-propos", element: <AboutPage /> },
          { path: "logement/:id", element: <RentalPage /> },
          { path: "*", element: null, loader: throwNotFoundResponse },
        ],
      },
    ],
  },
]);

async function apiDataLoader() {
  const response = await fetch("/services/api/logements.json");

  if (
    !response.ok ||
    response.headers.get("content-type") !== "application/json"
  ) {
    throwNotFoundResponse();
  }

  return await response.json();
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
