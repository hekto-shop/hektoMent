import React from "react";
import classes from "./ProductItem.module.scss";

import { formatCurrency } from "../../helpers/format-number";

import * as icons from "../../assets/icons";

const ProductItem = (props) => {
  const {
    product,
    currency,
    handleIncrease,
    handleDecrease,
    handleRemove,
    showControls,
  } = props;

  const totalsClass = showControls
    ? classes["total-col"]
    : ` ${classes["total-col"]} ${classes["small-text"]} `;

  return (
    <>
      <div className={classes["product-col"]}>
        <div className={classes.thumbnail}>
          {showControls && (
            <span onClick={() => handleRemove(product)}>
              <img src={icons.deleteIcon} alt="remove" />
            </span>
          )}
          <img
            className={classes.image}
            src={product.productImage}
            alt={product.name}
          />
        </div>
        <div className={classes["product-name"]}>
          <h3>{product.name}</h3>
          <h4>{product.brand}</h4>
        </div>
      </div>
      {showControls && (
        <>
          <div className={classes["price-col"]}>
            {formatCurrency(product.price, currency)}
          </div>
          <div className={classes["quantity-col"]}>
            <span
              className={classes["quantity-button"]}
              onClick={() => handleDecrease(product)}
            >
              -
            </span>
            <span className={classes["quantity-value"]}>
              {product.quantity}{" "}
            </span>
            <span
              className={classes["quantity-button"]}
              onClick={() => handleIncrease(product)}
            >
              +
            </span>
          </div>{" "}
        </>
      )}
      <div className={totalsClass}>
        {formatCurrency(product.totalPrice, currency)}
      </div>
    </>
  );
};

export default ProductItem;
