import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../contexts/auth-context";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import classes from "./Header.module.scss";

import * as icons from "../../assets/icons";
import PageContainer from "../../containers/PageContainer";
import Navigation from "./Navigation";
import Searchbar from "../Searchbar";
import CurrencySelector from "../CurrencySelector";

import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../theme/colorModeContext";

const Header = () => {
  const { user } = useSession();
  let [headerClasses, setHeaderClasses] = useState(classes.header);
  const cart = useSelector((store) => store.cartReducer);
  const cartLength = cart.cartItems.length;
  const favsLength = cart.favorites.length;

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
      setHeaderClasses(`${classes.header} ${classes.fixed}`);
    } else {
      setHeaderClasses(classes.header);
    }
  });

  const theme = useTheme();
  const titleColor = { color: theme.palette.text.hektoTitle };
  const bottomHeaderBackgroundColor = {backgroundColor: theme.palette.background.bottomHeader}
  const colorMode = React.useContext(ColorModeContext);
  return (
    <header className={headerClasses}>
      <div className={classes["top-header"]}>
        <PageContainer>
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
            <CurrencySelector />
            <Link to={user ? "/profile" : "/login"}>
              <h4>{user ? user.displayName : "Login"}</h4>
              <img src={icons.user} alt="User" />
            </Link>
            <Link to="/wishlist">
              <h4>Wishlist</h4>
              <img src={icons.heart} alt="heart" />
              {favsLength > 0 ? (
                <span className={classes.indicator}>{favsLength}</span>
              ) : null}
            </Link>
            <Link to="/cart">
              <img src={icons.cart} alt="cart" />
              {cartLength > 0 ? (
                <span className={classes.indicator}>{cartLength}</span>
              ) : null}
            </Link>
            <IconButton
              onClick={() => {
                colorMode.toggleColorMode();
              }}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </PageContainer>
      </div>

      <div className={classes["bottom-header"]} style={bottomHeaderBackgroundColor}>
        <PageContainer className={classes["grid-header"]}>
          <Link className={classes.logo} to="/homepage">
            <h1 style={titleColor}>Hekto</h1>
          </Link>

          <Navigation />
          {/* <Searchbar onSearch={(data) => console.log(data)} /> */}
        </PageContainer>
      </div>
    </header>
  );
};

export default Header;
