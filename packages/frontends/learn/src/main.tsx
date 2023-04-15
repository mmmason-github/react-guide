import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import routes from "./routes";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);

const onResize = (): void => {
  const fontsizes = [10, 20];
  const widthsizes = [320, 3820];
  const font = fontsizes[1] - fontsizes[0];
  const width = widthsizes[1] - widthsizes[0];
  const slope = font / width;
  const intercept = fontsizes[0] - slope * widthsizes[0];

  window.document.documentElement.style.setProperty(
    "--size",
    `${slope * window.innerWidth + intercept}px`
  );
};
onResize();
window.addEventListener("resize", onResize);
