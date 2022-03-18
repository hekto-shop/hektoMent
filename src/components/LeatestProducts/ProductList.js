import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Controls from "../Controls";

import * as images from "../../assets/images";
import { formatCurrency } from "../../helpers/format-number";
import classes from "./ProductList.module.scss";
import { useTheme } from '@mui/material/styles';

const ProductList = (props) => {
  const theme = useTheme();
  const textColor = {"color": theme.palette.text.primary};
  const productList = props.productList;
  const currency = useSelector((store) => store.productsReducer.currency);
  const sales = useSelector((store) => store.salesReducer.sales);

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
            <span className={classes["item-name"]}  style={textColor}>{item.name}</span>
            <span className={classes["item-price"]}  style={textColor}>
              <span> {formatCurrency(item.price, currency)} </span>
              {isOnSale && (
                <span className={classes["old-price"]}>
                  {formatCurrency(oldPrice, currency)}
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
