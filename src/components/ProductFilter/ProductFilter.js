import { useSelector } from "react-redux";
import { Slider, Rating } from "@mui/material";
import { sliderMarks } from "../../constants/sliderMarks";

import styles from "./ProductFilter.module.scss";

const ProductFilter = (props) => {
  const products = useSelector((state) => state.productsReducer.products);
  const categories = useSelector((state) => state.ctgReducer.categories);

  const {
    handleBrand,
    handleDiscount,
    handlePrice,
    handleColor,
    handleCategory,
    handleRaiting,
  } = props;

  const productBrands = [...products].map((item) => {
    return item.brand;
  });
  const setBrands = [...new Set(productBrands)]; // unique Brands

  const productColors = [...products]
    .map((item) => {
      return item.color;
    })
    .flat();
  const setColor = [...new Set(productColors)]; // unique Colors

  // Filter Side

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

  const discountSide = (
    <div className={styles["discount-items"]}>
      <div className={styles["discount-items__slider"]}>
        <p>Active (Dragging)</p>
        <Slider
          size="small"
          defaultValue={0}
          ariaLabel="small"
          valueLabelDisplay="auto"
          marks={sliderMarks}
          onChange={(e) => handleDiscount(e)}
        />
      </div>
    </div>
  );

  const raitingSide = (
    <div className={styles["raiting-items"]}>
      <span>
        <input type="checkbox" value="5" onChange={(e) => handleRaiting(e)} />
        <Rating defaultValue={5} size="small" readOnly />
      </span>
      <span>
        <input type="checkbox" value="4" onChange={(e) => handleRaiting(e)} />
        <Rating defaultValue={4} size="small" readOnly />
      </span>
      <span>
        <input type="checkbox" value="3" onChange={(e) => handleRaiting(e)} />
        <Rating defaultValue={3} size="small" readOnly />
      </span>
      <span>
        <input type="checkbox" value="2" onChange={(e) => handleRaiting(e)} />
        <Rating defaultValue={2} size="small" readOnly />
      </span>
      <span>
        <input type="checkbox" value="1" onChange={(e) => handleRaiting(e)} />
        <Rating defaultValue={1} size="small" readOnly />
      </span>
    </div>
  );

  const categoriesSide = [...categories].map((item, ind) => {
    return (
      <div className={styles["category-items"]} key={ind}>
        <input
          type="checkbox"
          name={item}
          id={item}
          onChange={(e) => handleCategory(e)}
        />
        <label htmlFor={item}>{item}</label>
      </div>
    );
  });

  const priceSide = (
    <div className={styles["price-items"]}>
      <span>
        <input
          type="checkbox"
          id="price1"
          min="0"
          max="150"
          onChange={(e) => handlePrice(e)}
        />
        <label htmlFor="price1">$0.00 - $150.00</label>
      </span>
      <span>
        <input
          type="checkbox"
          id="price2"
          min="150"
          max="350"
          onChange={(e) => handlePrice(e)}
        />
        <label htmlFor="price2">$150.00 - $350.00</label>
      </span>
      <span>
        <input
          type="checkbox"
          id="price3"
          min="150"
          max="504"
          onChange={(e) => handlePrice(e)}
        />
        <label htmlFor="price3">$150.00 - $504.00</label>
      </span>
      <span>
        <input
          type="checkbox"
          id="price4"
          min="450"
          onChange={(e) => handlePrice(e)}
        />
        <label htmlFor="price4">$450.00 +</label>
      </span>
      <input
        type="text"
        className={styles["price-input"]}
        placeholder="Price Range e.g 1 - 100"
        onChange={(e) => handlePrice(e)}
      />
    </div>
  );

  const colorSide = (
    <div className={styles["color-side"]}>
      <button
        data-color="all"
        style={{ width: "14px", height: "14px" }}
        className={styles["btn-mixed"]}
        onClick={(e) => handleColor(e)}
      ></button>
      {setColor.map((item, ind) => {
        return (
          <button
            key={ind}
            data-color={item}
            style={{ width: "14px", height: "14px", backgroundColor: item }}
            onClick={(e) => handleColor(e)}
          ></button>
        );
      })}
    </div>
  );

  return (
    <aside className={styles["aside"]}>
      <div className={styles["brand-filter"]}>
        <h2>Product Brand</h2>
        {brandSide}
      </div>
      <div className={styles["discount-filter"]}>
        <h2>Discount Offer</h2>
        {discountSide}
      </div>
      <div className={styles["raiting-filter"]}>
        <h2>Rating Item</h2>
        {raitingSide}
      </div>
      <div className={styles["category-filter"]}>
        <h2>Categories</h2>
        {categoriesSide}
      </div>
      <div className={styles["price-filter"]}>
        <h2>Price Filter</h2>
        {priceSide}
      </div>
      <div className={styles["color-filter"]}>
        <h2>Filter By Color</h2>
        {colorSide}
      </div>
    </aside>
  );
};

export default ProductFilter;
