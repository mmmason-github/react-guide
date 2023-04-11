import { Fragment, useEffect } from "react";

import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Main from "../components/common/main";

const FONTSIZES: [number, number] = [10, 20];
const WIDTHSIZES: [number, number] = [320, 3820];
const FONT: number = FONTSIZES[1] - FONTSIZES[0];
const WIDTH: number = WIDTHSIZES[1] - WIDTHSIZES[0];
const SLOPE: number = FONT / WIDTH;
const INTERCEPT: number = FONTSIZES[0] - SLOPE * WIDTHSIZES[0];

const handleResize = (): void => {
  window.document.documentElement.style.setProperty(
    "--size",
    `${SLOPE * window.innerWidth + INTERCEPT}px`
  );
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const PageLayout = (): JSX.Element => {
  handleResize();

  useEffect(function effect(): void {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};
export default PageLayout;
