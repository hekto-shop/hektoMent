import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./ListItem.module.scss";

import Rating from "../../components/UI/Rating";
import Controls from "../../components/Controls";

const ListItem = (props) => {
  const { product } = props;
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

  const stars = Math.round((5 * rating) / 100);
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
          <Rating stars={stars} />
        </div>
        <p>{description}</p>
        <Controls layout="horizontal-bottom" product={product} />
      </div>
    </div>
  );
};

export default ListItem;
