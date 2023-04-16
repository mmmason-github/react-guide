import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

import TodoPage from "./pages/todo-page/TodoPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<TodoPage />} path="/todo" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
