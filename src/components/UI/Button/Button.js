import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";

const Button = (props) => {
  const inlineStyles = {};
  if (props.fullHeight) inlineStyles.height = "100%";
  if (props.fullWidth) inlineStyles.width = "100%";

  let button = (
    <button className={classes.button} type={props.type}>
      {props.children}
    </button>
  );

  if (props.link) {
    button = <Link to={props.link}>{button}</Link>;
  } else {
    button = <div className={classes.a}>{button}</div>;
  }

  return (
    <span
      className={classes.container}
      onClick={props.onClick}
      style={inlineStyles}
    >
      {button}
    </span>
  );
};

export default Button;
