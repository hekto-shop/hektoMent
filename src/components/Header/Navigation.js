import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles({
  text:{
    color: (theme)=> theme.palette.text.secondary
  }
});

const Navigation = () => {
  const theme = useTheme();
  const stylesClasses = useStyles(theme);
  
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <NavLink className={stylesClasses.text} activeClassName={classes.active} to="/homepage">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={stylesClasses.text} activeClassName={classes.active} to="/pages">
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink className={stylesClasses.text} activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={stylesClasses.text} activeClassName={classes.active} to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className={stylesClasses.text} activeClassName={classes.active} to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className={stylesClasses.text} activeClassName={classes.active} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
