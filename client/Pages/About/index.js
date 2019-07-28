import React from "react";
import { Helmet } from "react-helmet-async";
import { Page } from "../Styles";

const About = () => (
  <Page>
    <Helmet>
      <title>about page</title>
    </Helmet>
    <div>my about page</div>
  </Page>
);

export default About;
