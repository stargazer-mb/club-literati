import { createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: { main: "#e6e6e9" },
    secondary: { main: "#f99fff" },
    litFest: {
      primary: { main: "orange" },
      secondary: { main: "yellow" },
    },
    tedx: {
      primary: { main: "#red" },
      secondary: { main: "#black" },
    },
    mun: {
      primary: { main: "#blue" },
      secondary: { main: "#white" },
    },
    murdmyst: {
      primary: { main: "green" },
      secondary: { main: "#yellow" },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
