import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
} from "../../store/thunk";
import * as icons from "../../assets/icons";

import classes from "./Controls.module.scss";

import CustomizedDialogs from "../CustomizedDialogs";

const Controls = (props) => {
  const [zoomPicture, setZoomPicture] = useState(false);
  const dispatch = useDispatch();
  const { product } = props;

  let style;

  const cart = useSelector((store) => store.cartReducer.cartItems);
  const favorites = useSelector((store) => store.cartReducer.favorites);
  const isInCart = cart
    .map((item) => item.productCode)
    .includes(product.productCode);
  const isInFavorites = favorites
    .map((item) => item.productCode)
    .includes(product.productCode);

  const cartHandler = (e) => {
    e.stopPropagation();
    if (!isInCart) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product));
    }
  };

  const favoritesHandler = (e) => {
    e.stopPropagation();
    if (!isInFavorites) {
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(product));
    }
  };
  const handleZoom = (e) => {
    e.stopPropagation();
    setZoomPicture((state) => !state);
  };

  return (
    <div
      className={`${classes[props.layout]} ${classes.flex}`}
      onClick={props.redirectHandler}
    >
      <span className={isInCart ? classes.active : ""} onClick={cartHandler}>
        <img src={icons.cartBlue} alt="Cart" />
      </span>
      <span
        className={isInFavorites ? classes.active : ""}
        onClick={favoritesHandler}
      >
        <img src={icons.heartBlue} alt="Favorites" />
      </span>
      <span onClick={handleZoom}>
        <img src={icons.zoomBlue} alt="Zoom" />
      </span>
      <CustomizedDialogs
        open={zoomPicture}
        handleClose={handleZoom}
        buttonText="Close"
      >
        <img
          className={classes["large-image"]}
          src={product.productImage}
          alt={product.name}
        />
      </CustomizedDialogs>
    </div>
  );
};

export default Controls;
