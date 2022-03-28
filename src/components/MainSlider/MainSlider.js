import React from "react";
import { useSelector } from "react-redux";
import PageContainer from "../../containers/PageContainer";
import Carousel from "react-material-ui-carousel";
import classes from "./MainSlider.module.scss";
import * as images from "../../assets/img";

import Button from "../UI/Button";

import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: (theme) => theme.palette.background.main,
    width: "100%",
    height: "764px",
    position: "relative",
  },
});

const MainSlider = () => {
  const theme = useTheme();
  const stylesClasses = useStyles(theme);
  const sales = useSelector((state) => state.salesReducer.sales);

  const markup = sales.map((item, idx) => {
    if (!item) return null;
    return (
      <div key={idx} className={classes.slider}>
        <div className={classes["product-description"]}>
          <h6>{item.product.brand}</h6>
          <h2>{item.product.name}</h2>
          <p>{item.product.description}</p>

          <Button link={`/product/${item.product.productCode}`}>
            Shop Now
          </Button>
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
      <PageContainer>
        <img className={classes["lamp-image"]} src={images.lamp} alt="lamp" />
        <Carousel className={classes.carousel}>{markup}</Carousel>
      </PageContainer>
    </main>
  );
};

export default MainSlider;
