import { createMuiTheme } from "@material-ui/core/styles";
import {primaryColor, white, black} from "./variables";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: black,
      white: white,
    },
    primary: {
      main: primaryColor
    },
    background: {
      default: white,
    },
  },
  typography: {
    htmlFontSize: 18,
    fontFamily: '"Montserrat", "sans-serif"',
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightBold: 700,
  },
});

export default theme;
