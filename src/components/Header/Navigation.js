import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/pages">
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
