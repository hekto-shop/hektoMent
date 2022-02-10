import React, { useState, useEffect } from "react";
import * as images from "../../assets/img/index";

import classes from "./ProductCard.module.scss";

import PageContainer from "../../containers/PageContainer";

const ProductCard = (props) => {
  const product = props.product;
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => setCurrentImage(product?.productImage), [product]);
  if (!product) return <p>Loading...</p>;

  let thumbnails;

  const handlePreview = (e) => setCurrentImage(e.target.src);

  if (Array.isArray(product.productImage)) {
    thumbnails = product.productImage.map((image, i) => {
      return (
        <div className={classes.thumbnail}>
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

  return (
    <PageContainer>
      <div className={classes.card}>
        <div className={classes.images}>
          <div className={classes.thumbnails}>{thumbnails}</div>
          <div className={classes.preview}>
            <img src={currentImage} alt="preview" />
          </div>
        </div>
        <div className={classes.details}>
          <h2>{product.name}</h2>
          <div className={classes.prices}>
            <span className={classes.price}>{product.price.toFixed(2)}</span>
          </div>
          <div className={classes.colors}>Color</div>
          <p className={classes.description}>{product.description}</p>
          <div className={classes.actions}>
            <span>Add to Cart</span>
            <span>ღ</span>
          </div>
          <div>Categories</div>
          <div>Tags</div>
          <div>Share</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProductCard;
