import React from "react";
import { Helmet } from "react-helmet-async";
import { GlobalStyles } from "../Styles";

const Home = () => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <GlobalStyles />
    <div>aloha world</div>
  </React.Fragment>
);

export default Home;
