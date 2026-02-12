import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { customTheme } from "./shared/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>,
);
