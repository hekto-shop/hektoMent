import React, { useState } from "react";
import classes from "./Searchbar.module.scss";

import * as icons from "../../assets/icons";

const Searchbar = (props) => {
  const [keyword, setKeyword] = useState("");

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    props.onSearch(keyword);
    setKeyword("");
  };
  return (
    <form className={classes.searchbar} onSubmit={searchSubmitHandler}>
      <input
        className={classes.input}
        type="text"
        value={keyword}
        onChange={inputChangeHandler}
        placeholder={props.placeholder}
      />
      <button className={classes.submit} type="submit">
        <img src={icons.magnifier} alt="search" />
      </button>
    </form>
  );
};

export default Searchbar;
