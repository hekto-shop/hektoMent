import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./GridItem.module.scss";

import Controls from "../../components/Controls";

const GridItem = (props) => {
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
        <Controls layout="vertical" product={product} />
        <img src={productImage} alt={name} />
      </div>
      <div className={classes.details}>
        <Link to={`/product/${productCode}`}>
          <h4>{name}</h4>
        </Link>
        <div className={classes.colors}>{colors}</div>
        <span className={classes.price}>{`${currency} ${price.toFixed(
          2
        )}`}</span>
      </div>
    </div>
  );
};

export default GridItem;
