import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorites } from "../../store/thunk";
import * as icons from "../../assets/icons";

import classes from "./Controls.module.scss";

const Controls = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  let style;

  const cart = useSelector((store) => store.cartReducer.cartItems);
  console.log(cart);

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

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToFavs = () => {
    dispatch(addToFavorites(product));
  };
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
