import React from "react";
import { Helmet } from "react-helmet-async";
import { Page } from "../Styles";

const Home = () => (
  <Page>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div>aloha world</div>
  </Page>
);

export default Home;
