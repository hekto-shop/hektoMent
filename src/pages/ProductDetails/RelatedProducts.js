import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./RelatedProducts.module.scss";
import { shuffle } from "../../helpers/shuffle-array";
import PageContainer from "../../containers/PageContainer";
import Ratings from "../../components/Ratings";

const RelatedProducts = (props) => {
  const { product } = props;
  const history = useHistory();

  const navigateTo = (product) => {
    history.push(`/product/${product.productCode}`);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  const productList = useSelector((store) => store.productsReducer.products);
  const filteredList = [...productList].filter(
    (el) => el.brand === product.brand && el.productCode !== product.productCode
  );

  const shuffledList = shuffle(filteredList);

  const relatedProducts = shuffledList.slice(0, 4).map((item) => {
    return (
      <div onClick={() => navigateTo(item)} className={classes["grid-item"]}>
        <div className={classes["image-container"]}>
          <img src={item.productImage} />
        </div>

        <div className={classes.details}>
          <h3 onClick={() => navigateTo(item)}>{item.name}</h3>
          <span className={classes.rating}>
            <Ratings product={item} />
          </span>
        </div>
        <span className={classes.price}>{item.price.toFixed(2)}</span>
      </div>
    );
  });

  return (
    <section className={classes.section}>
      <PageContainer>
        <h2>Related Products</h2>
        <div className={classes.grid}>{relatedProducts}</div>
      </PageContainer>
    </section>
  );
};

export default RelatedProducts;
