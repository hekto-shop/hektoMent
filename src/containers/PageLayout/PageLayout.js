import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

import classes from "./PageLayout.module.scss";
import PageContainer from "../PageContainer";


import { useTheme } from '@mui/material/styles';

const PageLayout = (props) => {
  const theme = useTheme();
  const backgroundColor = {"backgroundColor": theme.palette.background.light};
  const textColor = {"color": theme.palette.text.primary};
  const pageTitle = ( 
    <div className={classes.title}  style={backgroundColor}>
      <PageContainer>
        <h2>{props.title}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/" style={textColor}>Home</Link>
            </li>
            <span>.</span>
            <li>
              <Link to="/" style={textColor}>Pages</Link>
            </li>
            <span>.</span>
            <li className={classes.current}>{props.title}</li>
          </ul>
        </nav>
      </PageContainer>
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
