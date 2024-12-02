import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import ReduxProvider from "./redux/ReduxProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ReduxProvider>
  </StrictMode>
);
