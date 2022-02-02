import React, { useState } from "react";
import { useSelector } from "react-redux";
import { productListReducer } from "../../helpers/product-list-reducer";

import classes from "./Shop.module.scss";
// import * as icons from "../../assets/icons";

import PageLayout from "../../containers/PageLayout";
import ShopSettings from "../../components/ShopSettings";
import GridView from "../../components/GridView";
import ListView from "../../components/ListView";
import Pagination from "../../components/Pagination/Pagination";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const [sortType, setSortType] = useState(0); // 0-Arrival date; 1-Price:Lowest->Highest; 2-Price:Highest->Lowest;
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.productsReducer.products);
  const totalPages = Math.trunc(products.length / perPage) + 1;

  const productList = productListReducer(
    [...products],
    sortType,
    searchValue,
    perPage,
    currentPage
  );

  // Event Handlers for <ShopSettings/>
  const handleSort = (e) => setSortType(+e.target.value);
  const handleSearch = (e) => setSearchValue(e.target.value);
  const handlePerPage = (e) => setPerPage(+e.target.value);
  const handleGridView = () => setGridView(true);
  const handleListView = () => setGridView(false);

  // Event Handlers for <Pagination/>
  const handlePagination = (e) => {
    window.scrollTo({ top: 400, behavior: "smooth" });
    setCurrentPage((prevState) => prevState + +e.target.value);
  };

  return (
    <PageLayout title="Shop">
      <section className={classes["temporary-container"]}>
        <ShopSettings
          handleSort={handleSort}
          handleSearch={handleSearch}
          handlePerPage={handlePerPage}
          handleGridView={handleGridView}
          handleListView={handleListView}
        />
        {gridView ? (
          <GridView productList={productList} />
        ) : (
          <ListView productList={productList} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
        />
      </section>
    </PageLayout>
  );
};

export default Shop;
