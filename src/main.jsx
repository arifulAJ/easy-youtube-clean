import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/them";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    ,
  </StoreProvider>
);
