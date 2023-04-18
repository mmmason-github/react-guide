import { CssBaseline, createTheme } from "@mui/material";

import { ThemeProvider } from "@emotion/react";
import MuiButton from "./components/mui/Button/MuiButton";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MuiButton />
    </ThemeProvider>
  );
}

export default App;
