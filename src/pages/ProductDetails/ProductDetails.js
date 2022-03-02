import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PageLayout from "../../containers/PageLayout";
import ProductCard from "./ProductCard";
import MoreInfo from "./MoreInfo";
import RelatedProducts from "./RelatedProducts";
import Loader from "../../components/UI/Loader";

import { scrollTo } from "../../helpers/smooth-scroll";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const productList = useSelector((store) => store.productsReducer.products);
  const currency = useSelector((store) => store.productsReducer.currency);
  // const product = [...productList].find((prod) => prod.productCode === id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    scrollTo();
    setProduct([...productList].find((prod) => prod.productCode === id));
  }, [productList, id]);

  if (!product) {
    return (
      <PageLayout title="Product Details">
        <Loader />
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Product Details">
      <ProductCard product={product} currency={currency} />}
      <MoreInfo product={product} />
      <RelatedProducts product={product} />
    </PageLayout>
  );
};

export default ProductDetails;
