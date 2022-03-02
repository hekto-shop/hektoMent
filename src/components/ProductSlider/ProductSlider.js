import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import Controls from "../Controls";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { formatCurrency } from "../../helpers/format-number";
import styles from "./ProductSlider.module.scss";

const ProductSlider = (props) => {
  const [hovering, setHovering] = useState(false);
  const [current, setCurrent] = useState(0);
  const history = useHistory();
  const currency = useSelector((state) => state.productsReducer.currency);

  const { key, index, item } = props;

  const hoverHandler = (ind) => {
    setHovering(true);
    setCurrent(ind);
  };

  const hoverCancelHandler = () => {
    setHovering(false);
  };

  return (
    <Card
      key={key}
      className={styles.card}
      sx={{ width: 600 }}
      onMouseEnter={() => hoverHandler(index)}
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
          {index === current && hovering ? (
            <button
              className={styles["card-media__btn"]}
              onClick={() => {
                history.push(`/product/${item.productCode}`);
              }}
            >
              View Details
            </button>
          ) : null}
          {index === current && hovering ? (
            <Controls
              layout="horizontal-top"
              product={item}
              redirectHandler={(e) => {
                history.push(`/product/${item.productCode}`);
              }}
            />
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
              {formatCurrency(item.price, currency)}
            </p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductSlider;
