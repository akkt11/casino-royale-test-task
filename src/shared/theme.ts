import { createTheme } from "@mui/material/styles";

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
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#000",
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
            background: "linear-gradient(90deg, #FF8D6B 5%, #FFBA47 100%)",
          },
        },
      ],
    },
  },
});
