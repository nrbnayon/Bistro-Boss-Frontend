import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFound from "../NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

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
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRoute>
            <Register />
          </GuestRoute>
        ),
      },
      {
        path: "/menu",
        element: (
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
]);
