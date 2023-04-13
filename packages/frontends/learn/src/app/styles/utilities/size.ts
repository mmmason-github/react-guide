export default function setSize(): void {
  const fonts: [number, number] = [10, 20];
  const widths: [number, number] = [320, 3840];
  const fontNumerator = fonts[1] - fonts[0];
  const widthDenominator = widths[1] - widths[0];
  const slope = fontNumerator / widthDenominator;
  const intercept = fonts[0] - slope * widths[0];

  window.document.documentElement.style.setProperty(
    "--size",
    `${slope * window.innerWidth + intercept}px`
  );
}
