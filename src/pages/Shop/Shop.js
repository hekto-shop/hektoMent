import React, { useState ,useEffect } from "react";
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
import ProductFilter from "../../components/ProductFilter";

const Shop = () => {
  const [filterClick, setFilterClick] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => scrollTo(), []);

  const params = new URLSearchParams(location.search);

  const view = params.get("view") || "grid";
  const sortType = +params.get("sort") || 0;
  const searchValue = params.get("keyword") || "";
  const currentPage = +params.get("page") || 1;
  const perPage = +params.get("perpage") || 16;
  const brandValue = params.get("brand") || "all";
  const discountValue = +params.get("discount", 0);
  const priceValue = params.get("price", "0");
  const colorValue = params.get("col", "");
  const categoryValue = params.get("cat", "");
  const raitingValue = params.get("raiting", "all");

  // Reduce product list to show, based on parameters indicated by the user
  const products = useSelector((state) => state.productsReducer.products); // Can't be modified.
  const sales = useSelector((state) => state.salesReducer.sales); // Can't be modified
  const filteredList = productListReducer(
    [...products],
    [...sales],
    sortType,
    searchValue,
    brandValue,
    discountValue,
    priceValue,
    colorValue,
    categoryValue,
    raitingValue
  );
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
  const handleFilterClick = () => setFilterClick((prevState) => !prevState);

  // Event Handler for <ProductFilter />
  const handleBrand = (e) => {
    const currentValue = params.get("brand");
    if (!e.target.checked) {
      const newValue = currentValue
        .split("+")
        .filter((item) => item !== e.target.name)
        .join("+");
      updateURL("brand", newValue);
    } else {
      const newValue = currentValue
        ? currentValue + "+" + e.target.name
        : e.target.name;
      updateURL("brand", newValue);
    }
  };

  const handleDiscount = (e) => {
    updateURL("discount", e.target.value);
  };

  const handleCategory = (e) => {
    const currentValue = params.get("cat");
    if (!e.target.checked) {
      const newValue = currentValue
        .split("+")
        .filter((item) => item !== e.target.name)
        .join("+");
      updateURL("cat", newValue);
    } else {
      const newValue = currentValue
        ? currentValue + "+" + e.target.name
        : e.target.name;
      updateURL("cat", newValue);
    }
  };

  const handlePrice = (e) => {
    let pricePath;
    let inputPriceArr;
    if (e.target.type === "checkbox") {
      pricePath = `${e.target.min} ${e.target.max}`;
      updateURL("price", pricePath);
      if (!e.target.checked) updateURL("price", "0");
    } else {
      if (e.target.value.includes(" - ")) {
        inputPriceArr = e.target.value.split(" - ");
        pricePath = `${inputPriceArr[0]} ${inputPriceArr[1]}`;
      } else {
        pricePath = `${e.target.value} ${""}`;
      }

      updateURL("price", pricePath);
      if (!e.target.value) updateURL("price", "0");
    }
  };

  const handleColor = (e) => {
    if (e.target.getAttribute("data.color") === "all") updateURL("col", "all");
    updateURL("col", e.target.getAttribute("data-color"));
  };

  const handleRaiting = (e) => {
    const currentValue = params.get("raiting");
    if (!e.target.checked) {
      const newValue = currentValue
        .split("+")
        .filter((item) => item !== e.target.value)
        .join("+");
      updateURL("raiting", newValue);
    } else {
      const newValue = currentValue
        ? currentValue + "+" + e.target.value
        : e.target.value;
      updateURL("raiting", newValue);
    }
  };

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
          handleFilterClick={handleFilterClick}
          numberOfProducts={products.length}
        />
        <div className={classes["middle-shop-section"]}>
          {filterClick && (
            <ProductFilter
              filteredList={filteredList}
              handleBrand={handleBrand}
              handleDiscount={handleDiscount}
              handlePrice={handlePrice}
              handleColor={handleColor}
              handleCategory={handleCategory}
              handleRaiting={handleRaiting}
            />
          )}
          {view === "grid" ? (
            <GridView productList={productList} isFilterClicked={filterClick} />
          ) : (
            <ListView productList={productList} isFilterClicked={filterClick} />
          )}
        </div>
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
