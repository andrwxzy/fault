import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";

export const router = createBrowserRouter([
  {
    path: "/search",
    Component: Search,
  },
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/shop",
        children: [
          {
            index: true,
            Component: Shop,
          },
          {
            path: ":id",
            Component: ProductDetails,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
