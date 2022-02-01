import React, { useState } from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../containers/PageLayout";

import GridView from "../../containers/GridView";
import ListView from "../../containers/ListView/ListView";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const productList = useSelector((state) => state.productsReducer.products);

  console.log(productList);
  return (
    <PageLayout title="Shop">
      {gridView ? (
        <GridView productList={productList} />
      ) : (
        <ListView productList={productList} />
      )}
    </PageLayout>
  );
};

export default Shop;
