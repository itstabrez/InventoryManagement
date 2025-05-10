import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1570EF",
      sidebarColor: "#1570EF",
    },
    secondary: {
      main: "#FFDBBB",
    },
    background: {
      colorWhite: "#fff",
      default: "#f4f6f8",
      error: "#FEECEB",
      purchaseBarColor: "#74B0FA",
      saleBarColor: "#51CC5D",
      graphGradient: [
        { offset: "0%", color: "#817AF3" },
        { offset: "48%", color: "#74B0FA" },
        { offset: "100%", color: "#79D0F1" },
      ],
    },
    text: {
      heading: "#383E49",
      primary: "#5D6679",
      secondary: "#444444",
      searchBarText: "#858D9D",
      colorLightRed: "#AA3028",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Inter, sans-serif",
        },
        "*": {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
