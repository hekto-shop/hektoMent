import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../containers/PageLayout";
import * as icons from "../../assets/icons";

import classes from "./Shop.module.scss";

import GridView from "../../components/GridView";
import ListView from "../../components/ListView";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const [sort, setSort] = useState(0); // 0-Arrival date; 1-Price:Lowest->Highest; 2-Price:Highest->Lowest;
  const [searchValue, setSearchValue] = useState("");

  const products = useSelector((state) => state.productsReducer.products);

  let productList = [...products].sort((prod1, prod2) => {
    if (sort === 0) {
      return prod1.arrivalDate.seconds - prod2.arrivalDate.seconds;
    } else if (sort === 1) {
      return prod1.price - prod2.price;
    } else {
      return prod2.price - prod1.price;
    }
  });

  productList = productList.filter((product) => {
    if (!searchValue) return true;
    return (
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.productCode.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const handleSort = (e) => setSort(+e.target.value);
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <PageLayout title="Shop">
      <section className={classes["temporary-container"]}>
        <div className={classes["top-bar"]}>
          <h2>Ecommerce Accessories & Fashion Items</h2>
          <label>
            Per Page:
            <input className={classes.perpage} type="text" />
          </label>
          <label>
            Sort by:
            <select onChange={handleSort}>
              <option value="0">Arrival Date</option>
              <option value="1">Price: Lowest first</option>
              <option value="2">Price: Highest first</option>
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
          <input onChange={handleSearch} type="text" />
          <button>
            <img src={icons.filter} />
          </button>
        </div>
        {gridView ? (
          <GridView productList={productList} />
        ) : (
          <ListView productList={productList} />
        )}
      </section>
    </PageLayout>
  );
};

export default Shop;
