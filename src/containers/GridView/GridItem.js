import React from "react";
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

  return (
    <div className={classes.item}>
      <div className={classes["image-container"]}>
        <Controls layout="vertical" product={product} />
        <img src={productImage} alt={name} />
      </div>
    </div>
  );
};

export default GridItem;
