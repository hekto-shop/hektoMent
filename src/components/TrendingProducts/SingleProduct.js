import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { formatCurrency } from "../../helpers/format-number";
import classes from "./SingleProduct.module.scss";

const SingleProduct = ({ product, currency, type = "vertical" }) => {
  const history = useHistory();

  const cardClass =
    type === "vertical" ? classes["vertical-card"] : classes["horizontal-card"];

  const handleClick = () => history.push(`/product/${product.productCode}`);
  return (
    <div onClick={handleClick} className={cardClass}>
      <div className={classes["img-container"]}>
        <img src={product.productImage} alt={product.name} />
      </div>
      <div className={classes.details}>
        <span className={classes["product-name"]}>{product.name}</span>
        <span className={classes["product-price"]}>
          {formatCurrency(product.price, currency)}
        </span>
      </div>
    </div>
  );
};

export default SingleProduct;
