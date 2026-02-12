import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as ThemeProvider } from "@mui/material";
import { customTheme } from "./shared/theme.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={customTheme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
);
