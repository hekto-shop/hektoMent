import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSession } from "../../contexts/auth-context";
import classes from "./ListItem.module.scss";

import { Rating } from "@mui/material";
import { rateProduct } from "../../helpers/rate-product";
import Controls from "../../components/Controls";
import { SettingsSystemDaydreamSharp } from "@mui/icons-material";

const ListItem = (props) => {
  const [readOnly, setReadOnly] = useState(false);
  const [stars, setStars] = useState(0);
  const { product } = props;
  const { user } = useSession();
  const {
    active,
    arrivalDate,
    brand,
    category,
    color,
    description,
    name,
    price,
    productCode,
    productImage,
    quantity,
    rating,
    reviews,
    tags,
  } = product;

  const currency = useSelector((store) => store.productsReducer.currency);

  const colors = color.map((clr) => {
    return (
      <span
        key={clr}
        className={classes.color}
        style={{ backgroundColor: clr }}
      ></span>
    );
  });

  const numberOfReviews = rating.ratings.length;
  const averageRating =
    rating.ratings.reduce((acc, cur) => acc + cur, 0) / numberOfReviews || 0;

  useEffect(() => {
    if (!user) setReadOnly(true);
    if (rating.raters.includes(user.uid)) setReadOnly(true);
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
    <div className={classes.item}>
      <div className={classes["image-container"]}>
        <img src={productImage} alt={name} />
      </div>
      <div className={classes.details}>
        <div>
          <Link to={`/product/${productCode}`}>
            <h2>{name}</h2>
          </Link>
          {colors}
        </div>
        <div>
          <span>{`${currency} ${price.toFixed(2)}`}</span>
          <Rating
            name="half-rating-red"
            value={stars}
            max={5}
            precision={0.5}
            size="medium"
            readOnly={readOnly}
            onChange={handleRating}
          />
        </div>
        <p>{description}</p>
        <Controls layout="horizontal-bottom" product={product} />
      </div>
    </div>
  );
};

export default ListItem;
