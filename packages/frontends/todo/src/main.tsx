import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import TodoAddPage from "./pages/todo/add/TodoAdd";
import TodoDeletePage from "./pages/todo/delete/TodoDelete";
import TodoEditPage from "./pages/todo/edit/TodoEdit";
import TodoViewPage from "./pages/todo/view/TodoView";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<TodoAddPage />} path="/todo/add" />
        <Route element={<TodoDeletePage />} path="/todo/delete" />
        <Route element={<TodoEditPage />} path="/todo/edit" />
        <Route element={<TodoViewPage />} path="/todo/view" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
