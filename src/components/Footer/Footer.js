import React from "react";
import { Link } from "react-router-dom";
import * as icons from "../../assets/icons";
import { useSession } from "../../contexts/auth-context";
import { useSelector } from "react-redux";

import classes from "./Footer.module.scss";

import PageContainer from "../../containers/PageContainer";
import Button from "../UI/Button";

const Footer = () => {
  const { user } = useSession();
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  const categories = useSelector((state) => state.ctgReducer.categories);

  const categMarkup = categories.map((category, idx) => {
    return (
      <li key={Math.random().toFixed(7) + idx}>
        <Link to={`/${category}`}>{category}</Link>
      </li>
    );
  });

  const customerCare = user ? (
    <>
      <li>
        <Link to="">My Account</Link>
      </li>
      <li>
        <Link to="">Discount</Link>
      </li>
      <li>
        <Link to="">Returns</Link>
      </li>
      <li>
        <Link to="">Orders History</Link>
      </li>
      <li>
        <Link to="">Order Tracking</Link>
      </li>
    </>
  ) : (
    <li>
      <Link to="/support">Support</Link>
    </li>
  );
  return (
    <footer className={classes.footer}>
      <section className={classes["bottom-navigation"]}>
        <PageContainer className={classes.grid}>
          <div className={classes.contacts}>
            <h2>Hekto</h2>
            <form onSubmit={handleSubscribe}>
              <input type="email" placeholder="Enter Email Address" />
              <Button fullHeight fullWidth type="submit">
                Subscribe
              </Button>
            </form>
            <div>
              <p>Contact Info</p>
              <address>
                17 Princess Road, London, Greater London NW1 8JR, UK
              </address>
            </div>
          </div>
          <div className={classes.categories}>
            <h3>Categories</h3>
            <ul>{categMarkup}</ul>
          </div>
          <div className={classes["customer-care"]}>
            <h3>Customer Care</h3>
            <ul>{customerCare}</ul>
          </div>
          <div className={classes.pages}>
            <h3>Pages</h3>
            <ul>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Browse the Shop</Link>
              </li>
              <li>
                <Link to="">Category</Link>
              </li>
            </ul>
          </div>
        </PageContainer>
      </section>
      <section className={classes.copyright}>
        <PageContainer>
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
        </PageContainer>
      </section>
    </footer>
  );
};

export default Footer;
