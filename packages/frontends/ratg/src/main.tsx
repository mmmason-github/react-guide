import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BasicsPage from "./app/basics-components/Basics";
import ConditionalPage from "./app/conditional/Conditional";
import HomePage from "./app/home/Home";
import StatesEventsPage from "./app/state-events/StateEvents";
import StylingPage from "./app/styling/Styling";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/home " />
        <Route element={<BasicsPage />} path="/basics" />
        <Route element={<ConditionalPage />} path="/conditional" />
        <Route element={<StatesEventsPage />} path="/state-events" />
        <Route element={<StylingPage />} path="/styling" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
