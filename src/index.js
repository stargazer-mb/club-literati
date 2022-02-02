import { createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { red, yellow } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
      litFest: yellow[700],
      tedx: "red",
      mun: "blue",
      murdmyst: "green",
    },
    secondary: {
      main: "#f99fff",
      litFest: "yellow",
      tedx: "black",
      mun: "white",
      murdmyst: "yellow",
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
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
