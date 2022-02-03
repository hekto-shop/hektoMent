import React from "react";
import { useSession } from "../../../contexts/auth-context";
import * as icons from "../../../assets/icons";

import classes from "./Rating.module.scss";

const Rating = (props) => {
  const { ratings } = props;
  const { user } = useSession();
  console.log(user);
  const numberOfReviews = ratings.length;

  const averageRating =
    ratings.reduce((acc, cur) => acc + cur, 0) / numberOfReviews;

  const stars = Math.round((5 * averageRating) / 100);
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

  return (
    <span className={`${classes.rating} ${!user && classes.disabled}`}>
      {markup}
      <p>({numberOfReviews})</p>
    </span>
  );
};

export default Rating;
