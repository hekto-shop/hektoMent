import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./LeatestProducts.module.scss";
import ProductList from "./ProductList";


const LeatestProducts = () => {
  const [listType, setListType] = useState(0);
  const products = useSelector((store) => store.productsReducer.products);
  const sales = useSelector((store) => store.salesReducer.sales);

  const handleList = (e) => {
    e.target
      .closest("ul")
      .childNodes.forEach((node) => node.classList.remove(classes.active));
    e.target.classList.add(classes.active);
    setListType(e.target.value);
  };

  let productList;

  if (listType == 0) {
    productList = [...products]
      .sort(
        (elem1, elem2) => elem2.arrivalDate.seconds - elem1.arrivalDate.seconds
      )
      .slice(0, 6);
  } else if (listType == 1) {
    // Temporary code. Shall be changed when we have Orders collection in Firestore
    productList = [...products]
      .sort(
        (elem1, elem2) => elem2.arrivalDate.seconds - elem1.arrivalDate.seconds
      )
      .slice(0, 6);
  } else {
    productList = [...sales].map((elem) => elem.product).slice(0, 6);
  }

  return (
    <section className={classes.section}>
      <h2>Leatest Products</h2>
      <ul className={classes.nav} onClick={handleList}>
        <li className={classes.active} value="0">
          New Arrival
        </li>
        <li value="1">Best Seller</li>
        <li value="2">Special Offer</li>
      </ul>
      <ProductList productList={productList} />
    </section>
  );
};

export default LeatestProducts;
