import * as ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
