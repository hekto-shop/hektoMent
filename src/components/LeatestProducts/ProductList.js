import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Controls from "../Controls";

import * as images from "../../assets/images";

import classes from "./ProductList.module.scss";

const ProductList = (props) => {
  const productList = props.productList;
  const currency = useSelector((store) => store.productsReducer.currency);
  const sales = useSelector((store) => store.salesReducer.sales);
  console.log(sales);

  const saleBadge = (
    <span className={classes["sale-badge"]}>
      <img src={images.sale} alt="sale" />
      <p>Sale</p>
    </span>
  );

  const items = productList.map((item) => {
    const isOnSale = sales.some(
      (elem) => elem.product.productCode === item.productCode
    );
    const discount = isOnSale
      ? sales.find((elem) => elem.product.productCode === item.productCode)
          .amount
      : 0;

    const oldPrice = (item.price / (100 - discount)) * 100;

    return (
      <div className={classes.card}>
        <div className={classes["image-container"]}>
          {isOnSale && saleBadge}
          <Controls layout="vertical" product={item} />
          <img className={classes.img} src={item.productImage} />
        </div>
        <Link to={`/product/${item.productCode}`}>
          <div className={classes.description}>
            <span className={classes["item-name"]}>{item.name}</span>
            <span className={classes["item-price"]}>
              <span> {currency + " " + item.price.toFixed(2)}</span>
              {isOnSale && (
                <span className={classes["old-price"]}>
                  {currency + " " + oldPrice.toFixed(2)}
                </span>
              )}
            </span>
          </div>
        </Link>
      </div>
    );
  });

  return <div className={classes.grid}>{items}</div>;
};

export default ProductList;
