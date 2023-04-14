import { createBrowserRouter } from "react-router-dom";

import AboutPage from "./app/pages/about.page";
import ButtonPage from "./app/pages/button.page";
import CalculatorPage from "./app/pages/calculator.page";
import FakeLoginPage from "./app/pages/fake.login.page";
import HomePage from "./app/pages/home.page";
import LoginPage from "./app/pages/login.page";
import ProfilePage from "./app/pages/profile.page";
import ShoppingPage from "./app/pages/shopping.page";
import TictactoePage from "./app/pages/tictactoe.page";
import TodoPage from "./app/pages/todo.page";

export default createBrowserRouter([
  {
    element: <AboutPage />,
    path: "about"
  },
  {
    element: <ButtonPage />,
    path: "button"
  },
  {
    element: <CalculatorPage />,
    path: "calculator"
  },
  {
    element: <FakeLoginPage />,
    path: "fakelogin"
  },
  {
    element: <HomePage />,
    index: true,
    path: "home"
  },
  {
    element: <LoginPage />,
    path: "login"
  },
  {
    element: <ProfilePage />,
    path: "profile"
  },
  {
    element: <ShoppingPage />,
    path: "shopping"
  },
  {
    element: <TictactoePage />,
    path: "tictactoe"
  },
  {
    element: <TodoPage />,
    path: "todo"
  },
  {
    element: <HomePage />,
    path: "*"
  }
]);
