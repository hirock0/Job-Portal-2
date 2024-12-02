import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Apply from "../pages/Apply/Apply";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,

      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/user/v1/login",
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: "/user/v1/register",
          element: (
            <PublicRoute>
              <Register />
            </PublicRoute>
          ),
        },
        {
          path: "/apply",
          element: (
            <PrivateRoute>
              <Apply />
            </PrivateRoute>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
