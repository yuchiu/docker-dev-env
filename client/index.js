import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");

const app = (
  <HelmetProvider>
    <Home />
  </HelmetProvider>
);

ReactDOM.render(app, root);

// Enable Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
