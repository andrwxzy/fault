import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
