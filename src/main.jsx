import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Contact from "./Contact.jsx";
import PokemonList from "./Pokemon.jsx";
import RootLayout from "./RootLayout.jsx";
import PokemonDetails from "./PokemonDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pokemon",
        children: [
          {
            index: true,
            element: <PokemonList />,
          },
          {
            path: ":pokemonName",
            element: <PokemonDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
