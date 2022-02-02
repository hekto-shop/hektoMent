import React from "react";
import classes from "./ShopSettings.module.scss";
import * as icons from "../../assets/icons";

const ShopSettings = (props) => {
  const {
    handleSort,
    handleSearch,
    handlePerPage,
    handleGridView,
    handleListView,
  } = props;
  return (
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
        <button onClick={handleGridView}>
          <img src={icons.gridView} />
        </button>
        <button onClick={handleListView}>
          <img src={icons.listView} />
        </button>
      </label>
      <input onChange={handleSearch} type="text" />
      <button>
        <img src={icons.filter} />
      </button>
    </div>
  );
};

export default ShopSettings;
