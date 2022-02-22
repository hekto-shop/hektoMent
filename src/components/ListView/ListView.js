import React from "react";
import ListItem from "./ListItem";
import classes from "./ListView.module.scss";

const ListView = (props) => {
  const { productList, isFilterClicked } = props;

  const listItems = productList.map((product) => {
    return <ListItem key={Math.random().toFixed(8)} product={product} />;
  });

  const listStyles = isFilterClicked
    ? `${classes["list-container"]} ${classes["list-container-filter"]}`
    : classes["list-container"];

  const emptyProducts =
    productList.length === 0 ? (
      <h2 className={classes["empty-products"]}>Products Not Found</h2>
    ) : null;

  return (
    <section className={listStyles}>
      {listItems}
      {emptyProducts}
    </section>
  );
};

export default ListView;
