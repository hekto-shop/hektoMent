import React from "react";
// import ReactDOM from "react-dom";
import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

export default Backdrop;
