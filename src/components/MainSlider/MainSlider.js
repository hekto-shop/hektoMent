import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Carousel from "react-material-ui-carousel";
import classes from "./MainSlider.module.scss";
import * as images from "../../assets/img";

import Button from "../UI/Button";

const MainSlider = () => {
  const sales = useSelector((state) => state.salesReducer.sales);

  console.log(sales);
  const markup = sales.map((item, idx) => {
    if (!item) return null;
    return (
      <div key={idx} className={classes.slider}>
        <div className={classes["product-description"]}>
          <h6>Best furniture for your castle...</h6>
          <h2>New Furniture Collection Trents in 2022 </h2>
          <p>Lorem ipsum dolor sit amet, dondurma fati gulduzur.</p>

          <Button link="/product">Shop Now</Button>
        </div>
        <div className={classes["product-image"]}>
          <div className={classes.discount}>
            <span>{`${item.amount}%`}</span>
            <span>off</span>
          </div>
          <img src={item.product.productImage} alt="Product Image" />
        </div>
      </div>
    );
  });

  return (
    <main className={classes.container}>
      <img className={classes["lamp-image"]} src={images.lamp} alt="lamp" />
      <Carousel className={classes.carousel}>{markup}</Carousel>
    </main>
  );
};

export default MainSlider;
