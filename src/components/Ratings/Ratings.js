import React, { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import { rateProduct } from "../../helpers/rate-product";
import { useSession } from "../../contexts/auth-context";

const Ratings = (props) => {
  const [readOnly, setReadOnly] = useState(false);
  const [stars, setStars] = useState(0);
  const { user } = useSession();
  const { product } = props;
  const { rating } = product;

  const numberOfReviews = rating.ratings.length;
  const averageRating =
    rating.ratings.reduce((acc, cur) => acc + cur, 0) / numberOfReviews || 0;

  useEffect(() => {
    if (!user) setReadOnly(true);
    if (user && rating.raters.includes(user.uid)) setReadOnly(true);
    setStars(Math.round(averageRating / 10) / 2);
  }, [user, rating, averageRating]);

  const handleRating = (e) => {
    const givenRating = +e.target.value * 20;
    const userId = user.uid;
    rateProduct(product, givenRating, userId);
    setReadOnly(true);
    setStars((prevStars) => {
      const newAverage =
        (averageRating * numberOfReviews + givenRating) / (numberOfReviews + 1);
      return Math.round(newAverage / 10) / 2;
    });
  };

  return (
    <Rating
      name="half-rating"
      value={stars}
      max={5}
      precision={0.5}
      size="small"
      readOnly={readOnly}
      onChange={handleRating}
    />
  );
};

export default Ratings;
