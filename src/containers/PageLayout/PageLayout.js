import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

import classes from "./PageLayout.module.scss";

const PageLayout = (props) => {
  const pageTitle = (
    <div className={classes.title}>
      <h2>{props.title}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <span>.</span>
          <li>
            <Link to="/">Pages</Link>
          </li>
          <span>.</span>
          <li className={classes.current}>{props.title}</li>
        </ul>
      </nav>
    </div>
  );
  return (
    <>
      <Header />
      {props.isHomepage || pageTitle}
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
