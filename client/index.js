import React from "react";
import ReactDOM from "react-dom";
import Pages from "./Pages";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");

const app = (
  <HelmetProvider>
    <Pages />
  </HelmetProvider>
);

ReactDOM.render(app, root);

// Enable Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
