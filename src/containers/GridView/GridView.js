import React from "react";
import GridItem from "./GridItem";
import classes from "./GridView.module.scss";

const GridView = (props) => {
  const { productList } = props;

  const gridItems = productList.map((product) => {
    return <GridItem product={product} />;
  });
  return <section className={classes["grid-container"]}>{gridItems}</section>;
};

export default GridView;
