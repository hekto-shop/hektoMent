import BrandFilter from "../Filters/BrandFilter";
import DiscountFilter from "../Filters/DiscountFilter";
import RaitingFilter from "../Filters/RaitingFilter";
import CategoriesFilter from "../Filters/CategoriesFilter";
import PriceFilter from "../Filters/PriceFilter";
import ColorFilter from "../Filters/ColorFilter";

import styles from "./ProductFilter.module.scss";

const ProductFilter = (props) => {
  const {
    handleBrand,
    handleDiscount,
    handlePrice,
    handleColor,
    handleCategory,
    handleRaiting,
  } = props;

  return (
    <aside className={styles["aside"]}>
      <BrandFilter styles={styles} handleBrand={handleBrand} />
      <DiscountFilter styles={styles} handleDiscount={handleDiscount} />
      <RaitingFilter styles={styles} handleRaiting={handleRaiting} />
      <CategoriesFilter styles={styles} handleCategory={handleCategory} />
      <PriceFilter styles={styles} handlePrice={handlePrice} />
      <ColorFilter styles={styles} handleColor={handleColor} />
    </aside>
  );
};

export default ProductFilter;
