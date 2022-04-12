import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
} from "../../store/thunk";

import { formatCurrency } from "../../helpers/format-number";
import * as images from "../../assets/img/index";
import * as icons from "../../assets/icons";

import classes from "./ProductCard.module.scss";

import PageContainer from "../../containers/PageContainer";
import Ratings from "../../components/Ratings";

import { useTheme } from "@mui/material/styles";

const ProductCard = (props) => {
  const theme = useTheme();
  const backgroundColor = { backgroundColor: theme.palette.background.paper };
  const itemShadow =
    theme.palette.mode === "dark"
      ? { boxShadow: "0 0 8px 4px #f6f4fd" }
      : { boxShadow: "0px 0px 25px 10px #f6f4fd" };
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartReducer.cartItems);
  const favorites = useSelector((store) => store.cartReducer.favorites);
  const { product, currency } = props;
  const [currentImage, setCurrentImage] = useState(null);
  const isInCart =
    cart.length === 0
      ? false
      : cart.map((item) => item?.productCode).includes(product.productCode);
  const isInFavorites =
    favorites.length === 0
      ? false
      : favorites.map((item) => item.productCode).includes(product.productCode);

  useEffect(() => setCurrentImage(product?.productImage), [product]);
  if (!product) return <p>Loading...</p>;

  let thumbnails;

  const handlePreview = (e) => setCurrentImage(e.target.src);

  if (Array.isArray(product.productImage)) {
    thumbnails = product.productImage.map((image, i) => {
      return (
        <div key={i} className={classes.thumbnail}>
          <img src={image} alt="thumbnail" key={i} />
        </div>
      );
    });
  } else if (typeof product.productImage === "string") {
    thumbnails = [1, 2, 3].map((el, i) => {
      return (
        <div className={classes.thumbnail}>
          <img
            onMouseEnter={handlePreview}
            key={i}
            src={i === 0 ? product.productImage : images.noImage}
            alt="thumbnail"
          />
        </div>
      );
    });
  }
  const handleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };
  const handleFavorites = () => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };
  const favClasses = isInFavorites ? classes.active : "";
  const cartClasses = isInCart ? classes.active : "";

  return (
    <PageContainer>
      <div className={classes.card} style={itemShadow}>
        <div className={classes.images}>
          <div className={classes.thumbnails}>{thumbnails}</div>
          <div className={classes.preview}>
            <img src={currentImage} alt="preview" />
          </div>
        </div>
        <div className={classes.details}>
          <h2>{product.name}</h2>
          <div className={classes.ratings}>
            <Ratings product={product} />
            <span
              className={classes.number}
            >{`(${product.rating.ratings.length})`}</span>
          </div>
          <div className={classes.prices}>
            <span className={classes.price}>
              {formatCurrency(product.price, currency)}
            </span>
          </div>
          <div className={classes.colors}>Color</div>
          <p className={classes.description}>{product.description}</p>
          <div className={classes.actions}>
            <span
              className={`${classes["add-to-cart"]} ${cartClasses}`}
              onClick={handleCart}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </span>
            <span
              className={`${classes["add-to-favorites"]} ${favClasses}`}
              onClick={handleFavorites}
            >
              <img src={icons.heartBlue} alt="Favs" />
            </span>
          </div>
          <div>Category: {product.category}</div>
          <div>
            Tags:{" "}
            {product.tags.map((tag) => (
              <Link
                className={classes.tag}
                to={`/shop?keyword=${tag}`}
              >{`#${tag} `}</Link>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductCard;
