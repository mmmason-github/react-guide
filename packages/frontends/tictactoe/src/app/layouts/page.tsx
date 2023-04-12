import { useEffect } from "react";

import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Main from "../components/common/main";

const fontSize: [number, number] = [10, 20];
const widthSize: [number, number] = [320, 3820];
const font: number = fontSize[1] - widthSize[0];
const width: number = widthSize[1] - widthSize[0];
const slope: number = font / width;
const intercept: number = fontSize[0] - slope * widthSize[0];

const handleResize = (): void => {
  window.document.documentElement.style.setProperty(
    "--size",
    `${slope * window.innerWidth + intercept}px`
  );
};

export default function PageLayout(): JSX.Element {
  handleResize();

  useEffect(function effect(): void {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
