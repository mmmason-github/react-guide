import { createBrowserRouter } from "react-router-dom";

import PageLayout from "./app/layouts/page";
import IndexPage from "./app/pages";
import LoginPage from "./app/pages/login";
import NoMatchPage from "./app/pages/nomatch";
import RegisterPage from "./app/pages/register";
import TicTacToePage from "./app/pages/tictactoe";

export default createBrowserRouter([
  {
    children: [
      {
        element: <IndexPage />,
        index: true,
        path: "/"
      },
      {
        element: <IndexPage />,
        path: "home"
      },
      {
        element: <LoginPage />,
        path: "login"
      },
      {
        element: <RegisterPage />,
        path: "register"
      },
      {
        element: <TicTacToePage />,
        path: "tictactoe"
      },
      {
        element: <NoMatchPage />,
        path: "*"
      }
    ],
    element: <PageLayout />,
    path: "/"
  },
  {
    element: <NoMatchPage />,
    path: "*"
  }
]);
