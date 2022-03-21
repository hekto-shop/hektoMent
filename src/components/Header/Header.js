import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { useSession } from "../../contexts/auth-context";

import * as icons from "../../assets/icons";
import PageContainer from "../../containers/PageContainer";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";
import CurrencySelector from "../CurrencySelector";

import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../theme/colorModeContext";

const Header = () => {
  const { user } = useSession();

  const theme = useTheme();
  const titleColor = { color: theme.palette.text.hektoTitle };

  const colorMode = React.useContext(ColorModeContext);
  return (
    <header className={classes.header}>
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
            </Link>
            <Link to="/cart">
              <img src={icons.cart} alt="cart" />
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

      <div className={classes["bottom-header"]}>
        <PageContainer className={classes["grid-header"]}>
          <Link className={classes.logo} to="/homepage">
            <h1 style={titleColor}>Hekto</h1>
          </Link>

          <Navigation />
          <Searchbar />
        </PageContainer>
      </div>
    </header>
  );
};

export default Header;
