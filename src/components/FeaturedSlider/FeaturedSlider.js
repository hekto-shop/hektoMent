import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import breakPoints from "../../constants/sliderBreakPoints";
import ProductSlider from "../ProductSlider";

import "./slider.css";

const FeaturedSlider = () => {
  const products = useSelector((state) => state.productsReducer.products);

  const featuredProducts = [...products]
    .sort((a, b) => {
      if (a.rating > b.rating) return -1;
      if (a.rating < b.rating) return 1;
      return 0;
    })
    .slice(0, 12);

  const featPd = featuredProducts.map((item, ind) => {
    return (
      <ProductSlider
        key={ind}
        img={item.productImage}
        index={ind}
        item={item}
      />
    );
  });

  return <Carousel breakPoints={breakPoints}>{featPd}</Carousel>;
};

export default FeaturedSlider;
