import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "rgb(207, 2, 2)",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    htmlFontSize: "18px",
    fontFamily: '"Montserrat", "sans-serif"',
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightBold: 700,
  },
});

export default theme;
