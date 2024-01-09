import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    primary: {
      main: "#34c94b"
    }
  }
})

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>
);
