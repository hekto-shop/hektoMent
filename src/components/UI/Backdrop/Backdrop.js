import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onClick} className={classes.backdrop}></div>,
    document.getElementById("backdrop-root")
  );
};

export default Backdrop;
