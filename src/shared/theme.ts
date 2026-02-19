import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  typography: {
    fontFamily: "SF Pro Display",
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
      ],
    },
  },
});
