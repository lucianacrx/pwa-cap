import { lighten } from "polished";

const palette = {
  empty: "", // Fixes a bug with styled components that appends a coma
  primary: "#FB5058",
  "primary-light": lighten(0.3, "#FB5058"),
  secondary: "#F9F9F9",
  grey: [
    "#707070", // 0
    "#c3c3c3" // 1
  ],
  black: "#000000",
  white: "#FFFFFF"
};

const fonts = {
  primary: "'Montserrat', sans-serif"
};

const sizes = {
  page: {
    minWidth: "100vw",
    maxWidth: "100vw",
    minHeight: "100vh"
  }
};

export default { palette, fonts, sizes };
