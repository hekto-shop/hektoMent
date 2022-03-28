import React from "react";
import classes from "./ShopSettings.module.scss";
import * as icons from "../../assets/icons";

import { useTheme } from "@mui/material/styles";

const ShopSettings = (props) => {
  const theme = useTheme();
  const subTextColor = { color: theme.palette.text.subTextColor };
  const {
    handleSort,
    handleSearch,
    handlePerPage,
    handleGridView,
    handleListView,
    handleFilterClick,
    numberOfProducts,
  } = props;

  const handleRestriction = (e) => {
    if (+e.target.value < +e.target.min) e.target.value = e.target.min;

    handlePerPage(e);
  };

  return (
    <div className={classes["top-bar"]}>
      <div>
        <h2>Ecommerce Accessories & Fashion Items</h2>
        <p
          style={subTextColor}
        >{`About ${numberOfProducts} results in ${Math.random().toFixed(
          2
        )} seconds`}</p>
      </div>
      <label>
        Per Page:
        <input
          className={classes.perpage}
          type="number"
          placeholder="16"
          onBlur={handleRestriction}
          min="4"
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
      <button onClick={handleFilterClick}>
        <img src={icons.filter} />
      </button>
    </div>
  );
};

export default ShopSettings;
