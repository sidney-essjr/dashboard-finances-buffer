import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import HomePage from "../pages/HomePage";
import SigninPage from "../pages/signinPage";
import LoginPage from "../pages/loginPage";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signin", element: <SigninPage /> },
  { path: "/profile", element: <Profile /> },
]);
