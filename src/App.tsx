import { BrowserRouter } from "react-router";

import { CssBaseline } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./App.css";
import { customTheme } from "./shared";
import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <AppRoutes />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
