import React from "react";
import ListItem from "./ListItem";
import classes from "./ListView.module.scss";

const ListView = (props) => {
  const { productList } = props;

  const listItems = productList.map((product) => {
    return <ListItem product={product} />;
  });
  return <section className={classes["list-container"]}>{listItems}</section>;
};

export default ListView;
