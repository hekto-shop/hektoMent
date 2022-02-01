import { useSelector } from "react-redux";

import styles from "./FeaturedSlider.module.scss";

const FeaturedSlider = () => {
  const products = useSelector((state) => state.productsReducer.products);

  console.log(products);

  return <section className={styles.test}></section>;
};

export default FeaturedSlider;
