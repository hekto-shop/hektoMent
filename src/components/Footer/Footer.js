import { ClassNames } from "@emotion/react";
import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes["bottom-navigation"]}></section>
      <section className={classes.copyright}></section>
    </footer>
  );
};

export default Footer;
