import React from "react";
import * as icons from "../../../assets/icons";

import classes from "./Rating.module.scss";

const Rating = (props) => {
  const { stars } = props;

  let markup = [];

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      markup.push(
        <img key={Math.random().toFixed(8)} src={icons.starYellow} alt="*" />
      );
    } else {
      markup.push(
        <img key={Math.random().toFixed(8)} src={icons.starGrey} alt="*" />
      );
    }
  }

  return <span className={classes.rating}>{markup}</span>;
};

export default Rating;
