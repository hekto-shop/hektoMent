import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../containers/PageLayout";
import * as icons from "../../assets/icons";

import classes from "./Shop.module.scss";

import GridView from "../../containers/GridView";
import ListView from "../../containers/ListView/ListView";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const productList = useSelector((state) => state.productsReducer.products);

  console.log(productList);
  return (
    <PageLayout title="Shop">
      <div className={classes["top-bar"]}>
        <h2>Ecommerce Accessories & Fashion Items</h2>
        <label>
          Per Page:
          <input className={classes.perpage} type="text" />
        </label>
        <label>
          Sort by:
          <select>
            <option>-</option>
            <option>Price: Lowest first</option>
            <option>Price: Highest first</option>
            <option>Arrival Date</option>
          </select>
        </label>
        <label>
          View:
          <button
            onClick={() => {
              setGridView(true);
            }}
          >
            <img src={icons.gridView} />
          </button>
          <button
            onClick={(e) => {
              setGridView(false);
            }}
          >
            <img src={icons.listView} />
          </button>
        </label>
        <input type="text" />
        {gridView && (
          <button>
            <img src={icons.filter} />
          </button>
        )}
      </div>
      {gridView ? (
        <GridView productList={productList} />
      ) : (
        <ListView productList={productList} />
      )}
    </PageLayout>
  );
};

export default Shop;
