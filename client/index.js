import React from "react";
import ReactDOM from "react-dom";
import Pages from "./Pages";
import { HelmetProvider } from "react-helmet-async";
import { rehydrateMarks } from "react-imported-component";
import importedComponents from "./imported"; // eslint-disable-line

const root = document.getElementById("root");

const app = (
  <HelmetProvider>
    <Pages />
  </HelmetProvider>
);

/**
 * In production, we want to hydrate instead of render because of the server-rendering
 */
if (process.env.NODE_ENV === "production") {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(app, root);
  });
} else {
  ReactDOM.render(app, root);
}

/**
 * Enable Hot Module Reloading
 */
if (module.hot) {
  module.hot.accept();
}
