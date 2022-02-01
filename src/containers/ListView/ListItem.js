import React from "react";
import classes from "./ListItem.module.scss";

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
  return (
    <div className={classes.item}>
      <div className={classes["image-container"]}>
        <img src={productImage} alt={name} />
      </div>
      <div>
        <Controls layout="horizontal-bottom" product={product} />
      </div>
    </div>
  );
};

export default ListItem;
