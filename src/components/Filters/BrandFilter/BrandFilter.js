import { useSelector } from "react-redux";

const BrandFilter = (props) => {
  const products = useSelector((state) => state.productsReducer.products);

  const { styles, handleBrand } = props;

  const productBrands = [...products].map((item) => {
    return item.brand;
  });
  const setBrands = [...new Set(productBrands)]; // unique Brands

  const brandSide = setBrands.map((item, ind) => {
    return (
      <div className={styles["brand-items"]} key={ind}>
        <input
          type="checkbox"
          name={item}
          id={item}
          onChange={(e) => handleBrand(e)}
        />
        <label htmlFor={item}>{item}</label>
      </div>
    );
  });

  return (
    <div className={styles["brand-filter"]}>
      <h2>Product Brand</h2>
      {brandSide}
    </div>
  );
};

export default BrandFilter;
