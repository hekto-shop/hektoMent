import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {
  makeSlice,
  productListReducer,
} from "../../helpers/product-list-reducer";
import { partners } from "../../assets/images";
import classes from "./Shop.module.scss";

import PageLayout from "../../containers/PageLayout";
import ShopSettings from "../../components/ShopSettings";
import GridView from "../../components/GridView";
import ListView from "../../components/ListView";
import Pagination from "../../components/Pagination/Pagination";
import PageContainer from "../../containers/PageContainer";

const Shop = () => {
  const [view, setView] = useState("grid");
  const [sortType, setSortType] = useState(0); // 0-Arrival date; 1-Price:Lowest->Highest; 2-Price:Highest->Lowest;
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();
  const location = useLocation();

  // Update component states based on URL search parameters
  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      if (params.get("view")) setView(params.get("view"));
      if (params.get("sort")) setSortType(+params.get("sort"));
      if (params.get("keyword")) setSearchValue(params.get("keyword"));
      if (params.get("perpage") && Number.isInteger(+params.get("perpage")))
        setPerPage(+params.get("perpage"));
      if (params.get("page") && Number.isInteger(+params.get("page")))
        setCurrentPage(+params.get("page"));
    } else {
      setView("grid");
      setSortType(0);
      setSearchValue("");
      setPerPage(16);
      setCurrentPage(1);
    }
  }, [location]);

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
  const handleSearch = (e) => updateURL("keyword", e.target.value); // add setTimeout
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
