import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import classes from "./MainSlider.module.scss";
import * as images from "../../assets/img";

const MainSlider = () => {
  const salesItems = useSelector((state) => state.salesReducer.sales);
  console.log(salesItems);

  return (
    <main className={classes.slider}>
      <img className={classes["lamp-image"]} src={images.lamp} alt="lamp" />
      <Carousel>
        {salesItems.map((item, i) => {
          console.log(item.product);
          return <div key={i}>{/* <img src={item.product.data()} /> */}</div>;
        })}
      </Carousel>
    </main>
  );
};

export default MainSlider;
