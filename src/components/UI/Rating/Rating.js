import React from "react";
import * as icons from "../../../assets/icons";

import classes from "./Rating.module.scss";

const Rating = (props) => {
  const { stars } = props;

  let markup = [];

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      markup.push(<img src={icons.starYellow} alt="*" />);
    } else {
      markup.push(<img src={icons.starGrey} alt="*" />);
    }
  }
  console.log(markup);
  return <span className={classes.rating}>{markup}</span>;
};

export default Rating;
