import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFound from "../NotFound/NotFound";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Home />,
      },
    ],
  },
]);
