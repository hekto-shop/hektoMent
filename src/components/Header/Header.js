import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

import * as icons from "../../assets/icons";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["top-header"]}>
        <div className={classes["contact-info"]}>
          <address>
            <img src={icons.email} alt="email" />
            <h4>user@mail.com</h4>
          </address>
          <address>
            <img src={icons.phone} alt="email" />
            <h4>+1 (234) 5678</h4>
          </address>
        </div>

        <div className={classes.controls}>
          <div>ENG</div>
          <div>
            <select>
              <option value="USD">USD</option>
              <option value="GEL">GEL</option>
            </select>
          </div>
          <Link to="/login">
            <h4>Login</h4>
            <img src={icons.user} alt="User" />
          </Link>
          <Link to="/wishlist">
            <h4>Wishlist</h4>
            <img src={icons.heart} alt="heart" />
          </Link>
          <Link to="/cart">
            <img src={icons.cart} alt="cart" />
          </Link>
        </div>
      </div>

      <div className={classes["bottom-header"]}>
        <Link to="/homepage">
          <h1>Hekto</h1>
        </Link>

        <Navigation />
        <Searchbar />
      </div>
    </header>
  );
};

export default Header;
