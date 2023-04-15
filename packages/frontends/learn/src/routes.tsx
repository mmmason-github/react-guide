import { createBrowserRouter } from "react-router-dom";

import AboutPage from "./app/examples/about";
import AdminPage from "./app/pages/admin";
import AuthPage from "./app/pages/auth";
import ButtonPage from "./app/examples/button";
import CalculatorPage from "./app/examples/calculator";
import CounterPage from "./app/examples/counter";
import ExamplesLayout from "./app/layouts/examples";
import HomePage from "./app/pages/home";
import LoginPage from "./app/pages/login";
import PagesLayout from "./app/layouts/pages";
import PathPage from "./app/examples/path";
import ProfilePage from "./app/examples/profile";
import RegisterPage from "./app/pages/register";
import ShoppingPage from "./app/examples/shopping";
import TictactoePage from "./app/examples/tictactoe";
import UserPage from "./app/pages/user";

export default createBrowserRouter([
  {
    children: [
      // Examples Pages
      {
        element: <AuthPage />,
        path: "/auth"
      },
      {
        element: <AdminPage />,
        path: "/auth/admin"
      },
      {
        element: <LoginPage />,
        path: "/auth/login"
      },
      {
        element: <RegisterPage />,
        path: "/auth/register"
      },
      {
        element: <UserPage />,
        path: "/auth/user"
      },
      // Examples Pages
      {
        element: (
          <ExamplesLayout example="about">
            <AboutPage />
          </ExamplesLayout>
        ),
        path: "/examples/about"
      },
      {
        element: (
          <ExamplesLayout example="button">
            <ButtonPage />
          </ExamplesLayout>
        ),
        path: "/examples/button"
      },
      {
        element: (
          <ExamplesLayout example="calculator">
            <CalculatorPage />
          </ExamplesLayout>
        ),
        path: "/examples/calculator"
      },
      {
        element: (
          <ExamplesLayout example="counter">
            <CounterPage />
          </ExamplesLayout>
        ),
        path: "/examples/counter"
      },
      {
        element: (
          <ExamplesLayout example="path">
            <PathPage />
          </ExamplesLayout>
        ),
        path: "/examples/path"
      },
      {
        element: (
          <ExamplesLayout example="profile">
            <ProfilePage />
          </ExamplesLayout>
        ),
        path: "/examples/profile"
      },
      {
        element: (
          <ExamplesLayout example="shopping">
            <ShoppingPage />
          </ExamplesLayout>
        ),
        path: "/examples/shopping"
      },
      {
        element: (
          <ExamplesLayout example="tictactoe">
            <TictactoePage />
          </ExamplesLayout>
        ),
        path: "/examples/tictactoe"
      },
      // Home Pages
      {
        element: <HomePage />,
        path: "/home"
      }
    ],
    element: <PagesLayout />,
    path: "/"
  }
]);
