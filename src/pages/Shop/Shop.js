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
  const [perPage, setPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.productsReducer.products);
  const totalPages = Math.trunc(products.length / perPage) + 1;

  console.log(currentPage);
  console.log(totalPages);
  console.log(perPage);

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

  productList = productList.slice(
    (currentPage - 1) * perPage,
    perPage * currentPage
  );

  const handleSort = (e) => setSort(+e.target.value);
  const handleSearch = (e) => setSearchValue(e.target.value);
  const handlePerPage = (e) => setPerPage(+e.target.value);
  const handlePagination = (e) => {
    window.scrollTo({ top: 400, behavior: "smooth" });
    setCurrentPage((prevState) => prevState + +e.target.value);
  };
  return (
    <PageLayout title="Shop">
      <section className={classes["temporary-container"]}>
        <div className={classes["top-bar"]}>
          <h2>Ecommerce Accessories & Fashion Items</h2>
          <label>
            Per Page:
            <input
              className={classes.perpage}
              type="number"
              placeholder="16"
              onChange={handlePerPage}
            />
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
        <div className={classes.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={handlePagination}
            value="-1"
          >
            Previous Page
          </button>
          <span>{`${currentPage} / ${totalPages}`}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={handlePagination}
            value="1"
          >
            Next Page
          </button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Shop;
