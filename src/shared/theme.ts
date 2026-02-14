import { createTheme } from "@mui/material/styles";
import i18n from "../i18n";

const currentLanguage = i18n.language;

export const customTheme = createTheme({
  typography: {
    fontFamily: "SF Pro Display",
  },
  palette: {
    text: {
      primary: "#FFF",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "var(--black)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          display: "flex",
          gap: "8px",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { size: "large" },
          style: { padding: "14px 22px", fontSize: "1rem", borderRadius: 12 },
        },
        {
          props: { color: "primary", variant: "contained" },
          style: {
            background:
              currentLanguage === "en" ? "var(--orange-gradient)" : "black",
          },
        },
      ],
    },
  },
});
