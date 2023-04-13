import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import routes from "./routes";
import setSize from "./app/styles/utilities/size";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

setSize();
window.addEventListener("resize", function onResize() {
  setSize();
});
