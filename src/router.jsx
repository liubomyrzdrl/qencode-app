import { createBrowserRouter } from "react-router-dom";
import { Login, ForgotPassword, ResetPassword } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
]);
