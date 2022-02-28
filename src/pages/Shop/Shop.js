import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  makeSlice,
  productListReducer,
} from "../../helpers/product-list-reducer";
import { scrollTo } from "../../helpers/smooth-scroll";
import { partners } from "../../assets/images";
import classes from "./Shop.module.scss";

import PageLayout from "../../containers/PageLayout";
import ShopSettings from "../../components/ShopSettings";
import GridView from "../../components/GridView";
import ListView from "../../components/ListView";
import Pagination from "../../components/Pagination/Pagination";
import PageContainer from "../../containers/PageContainer";

const Shop = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => scrollTo(), []);

  const params = new URLSearchParams(location.search);

  const view = params.get("view") || "grid";
  const sortType = +params.get("sort") || 0;
  const searchValue = params.get("keyword") || "";
  const currentPage = +params.get("page") || 1;
  const perPage = +params.get("perpage") || 16;

  // Reduce product list to show, based on parameters indicated by the user
  const products = useSelector((state) => state.productsReducer.products); // Can't be modified.
  const filteredList = productListReducer([...products], sortType, searchValue);
  const totalPages = Math.trunc(filteredList.length / perPage) + 1;
  const productList = makeSlice(filteredList, currentPage, perPage);

  // Helper function
  const updateURL = (name, value) => {
    const params = new URLSearchParams(location.search);
    params.set(name, value);
    const newURL = `?${params.toString()}`;
    history.push({ pathname: location.pathname, search: newURL });
  };

  // Event Handlers for <ShopSettings/>
  const handleSort = (e) => updateURL("sort", e.target.value);
  const handleSearch = (e) => updateURL("keyword", e.target.value);
  const handlePerPage = (e) => updateURL("perpage", e.target.value);
  const handleGridView = () => updateURL("view", "grid");
  const handleListView = () => updateURL("view", "list");

  // Event Handlers for <Pagination/>
  const handlePagination = (e) => {
    window.scrollTo({ top: 400, behavior: "smooth" });
    updateURL("page", currentPage + +e.target.value);
  };

  return (
    <PageLayout title="Shop">
      <PageContainer>
        <ShopSettings
          handleSort={handleSort}
          handleSearch={handleSearch}
          handlePerPage={handlePerPage}
          handleGridView={handleGridView}
          handleListView={handleListView}
          numberOfProducts={products.length}
        />
        {view === "grid" ? (
          <GridView productList={productList} />
        ) : (
          <ListView productList={productList} />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePagination={handlePagination}
        />
        <div className={classes.partners}>
          <img src={partners} alt="our partners" />
        </div>
      </PageContainer>
    </PageLayout>
  );
};

export default Shop;
