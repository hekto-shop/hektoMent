import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PageLayout from "../../containers/PageLayout";
import ProductCard from "./ProductCard";
import MoreInfo from "./MoreInfo";
import RelatedProducts from "./RelatedProducts";

import { scrollTo } from "../../helpers/smooth-scroll";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const productList = useSelector((store) => store.productsReducer.products);
  const product = [...productList].find((prod) => prod.productCode === id);

  useEffect(() => scrollTo(), []);
  return (
    <PageLayout title="Product Details">
      <ProductCard product={product} />
      <MoreInfo product={product} />
      <RelatedProducts product={product} />
    </PageLayout>
  );
};

export default ProductDetails;
