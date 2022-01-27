import React from "react";
import * as icons from "../../assets/icons";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes["bottom-navigation"]}></section>
      <section className={classes.copyright}>
        <div className={classes.author}>©Webecy - All Rights Reserved</div>
        <div className={classes.social}>
          <a href="http://facebook.com" target="_blank">
            <img src={icons.facebook} alt="Facebook" />
          </a>
          <a href="http://instagram.com" target="_blank">
            <img src={icons.instagram} alt="Instagram" />
          </a>
          <a href="http://twitter.com" target="_blank">
            <img src={icons.twitter} alt="Twitter" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
