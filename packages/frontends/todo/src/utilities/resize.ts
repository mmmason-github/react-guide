export function handleResize(): void {
  const fontSizes = [10, 17.5];
  const widthSizes = [320, 3240];
  const font = fontSizes[1] - fontSizes[0];
  const width = widthSizes[1] - widthSizes[0];
  const slope = font / width;
  const intercept = fontSizes[0] - slope * widthSizes[0];
  window.document.documentElement.style.setProperty(
    "--size",
    `${slope * window.innerWidth + intercept}px`
  );
}
export default handleResize;
