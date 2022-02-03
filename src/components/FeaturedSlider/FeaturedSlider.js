import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Carousel from "react-elastic-carousel";
import breakPoints from "../../constants/sliderBreakPoints";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

import styles from "./FeaturedSlider.module.scss";
import "./slider.css";

const FeaturedSlider = () => {
  const [hovering, setHovering] = useState(false);
  const [current, setCurrent] = useState(0);
  const history = useHistory();
  const products = useSelector((state) => state.productsReducer.products);
  const currency = useSelector((state) => state.productsReducer.currency);

  const featuredProducts = [...products]
    .sort((a, b) => {
      if (a.rating > b.rating) return -1;
      if (a.rating < b.rating) return 1;
      return 0;
    })
    .slice(0, 12);

  const hoverHandler = (ind) => {
    setHovering(true);
    setCurrent(ind);
  };

  const hoverCancelHandler = () => {
    setHovering(false);
  };

  const featPd = featuredProducts.map((item, ind, arr) => {
    return (
      <Card
        key={ind}
        className={styles.card}
        sx={{ width: 600 }}
        onMouseEnter={() => hoverHandler(ind)}
        onMouseLeave={hoverCancelHandler}
      >
        <CardActionArea>
          <div className={styles["card-media"]}>
            <CardMedia
              component="img"
              alt={item.productImage}
              height="200"
              image={item.productImage}
            />
            {ind === current && hovering ? (
              <button
                className={styles["card-media__btn"]}
                onClick={() => {
                  history.push(`/product/${item.productCode}`);
                }}
              >
                View Details
              </button>
            ) : null}
          </div>
          <CardContent sx={{ p: 0 }}>
            <div className={styles["card-description"]}>
              <h4 className={styles["card-description__title"]}>{item.name}</h4>
              <div className={styles["card-description__colors"]}>
                {item.color.map((col, ind) => {
                  return (
                    <div
                      style={{ backgroundColor: col }}
                      className={styles["card-description__col"]}
                      key={ind}
                    ></div>
                  );
                })}
              </div>
              <p className={styles["card-description__code"]}>Code - Y523201</p>
              <p className={styles["card-description__price"]}>
                {currency}: {item.price}
              </p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });

  return <Carousel breakPoints={breakPoints}>{featPd}</Carousel>;
};

export default FeaturedSlider;
