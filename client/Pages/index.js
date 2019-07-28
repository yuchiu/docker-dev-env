import React from "react";
import { GlobalStyles } from "../Styles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Loading from "../components/common/Modules/Loading";
import ErrorMessage from "../components/common/Modules/ErrorMessage";
import importComponent from "react-imported-component";

/*
 * To import it, I’d like to make use of the React.lazy and Suspense APIs,
 * unfortunately, while they will work on the client,
 * once we get to Server Side Rendering we will find that ReactDomServer does not yet support Suspense.
 *
 * Instead, we will rely on another library called react-imported-component which will work with client side and server side rendered apps.
 */
const About = importComponent(() => import("./About"), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorMessage
});

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" render={() => <About />} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
