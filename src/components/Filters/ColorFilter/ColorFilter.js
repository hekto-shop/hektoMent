import { useSelector } from "react-redux";

const ColorFilter = (props) => {
  const products = useSelector((state) => state.productsReducer.products);

  const { styles, handleColor } = props;

  const productColors = [...products]
    .map((item) => {
      return item.color;
    })
    .flat();
  const setColor = [...new Set(productColors)]; // unique Colors

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
    <div className={styles["color-filter"]}>
      <h2>Filter By Color</h2>
      {colorSide}
    </div>
  );
};

export default ColorFilter;
