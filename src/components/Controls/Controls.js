import React from "react";
import * as icons from "../../assets/icons";

import classes from "./Controls.module.scss";

const Controls = (props) => {
  const { product } = props;
  let style;

  switch (props.layout) {
    case "vertical":
      style = classes.vertical;
      break;

    case "horizontal-bottom":
      style = classes["horizontal-bottom"];
      break;

    case "horizontal-top":
      style = classes["horizontal-top"];
      break;
  }

  const handleAddToCart = () => {};
  const handleAddToFavs = () => {};
  const handleZoom = () => {};

  return (
    <div className={`${style} ${classes.flex}`}>
      <span onClick={handleAddToCart}>
        <img src={icons.cartBlue} alt="Cart" />
      </span>
      <span onClick={handleAddToFavs}>
        <img src={icons.heartBlue} alt="Favorites" />
      </span>
      <span onClick={handleZoom}>
        <img src={icons.zoomBlue} alt="Zoom" />
      </span>
    </div>
  );
};

export default Controls;
