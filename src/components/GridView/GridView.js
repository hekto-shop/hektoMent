import React from "react";
import GridItem from "./GridItem";
import classes from "./GridView.module.scss";

const GridView = (props) => {
  const { productList, isFilterClicked } = props;

  const gridItems = productList.map((product) => {
    return <GridItem key={Math.random().toFixed(8)} product={product} />;
  });

  const gridStyles = isFilterClicked
    ? `${classes["grid-container"]} ${classes["grid-container-filter"]}`
    : classes["grid-container"];

  const emptyProducts =
    productList.length === 0 ? (
      <h2 className={classes["empty-products"]}>Products Not Found</h2>
    ) : null;

  return (
    <section className={gridStyles}>
      {gridItems}
      {emptyProducts}
    </section>
  );
};

export default GridView;
