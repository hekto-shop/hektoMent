import React from "react";
import classes from "./ListView.module.scss";

import ListItem from "./ListItem";

const ListView = (props) => {
  const { productList } = props;
  const listItems = productList.map((product) => {
    return <ListItem product={product} />;
  });
  return <section className={classes["list-container"]}>{listItems}</section>;
};

export default ListView;
