import React from "react";
import { NavLink } from "react-router-dom";
import { Header, Brand, Menu, MenuLink } from "./Styles";

export default () => (
  <Header>
    <Brand>Stream all the things!</Brand>
    <Menu>
      <MenuLink>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </MenuLink>
      <MenuLink>
        <NavLink to="/about" exact activeClassName="active">
          About
        </NavLink>
      </MenuLink>
    </Menu>
  </Header>
);
