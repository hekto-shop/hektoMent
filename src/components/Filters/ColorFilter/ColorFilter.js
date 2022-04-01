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
      {setColor.map((item, ind) => {
        console.log("item", item);
        return (
          <input
            type="checkbox"
            key={ind}
            className={styles["color-checkbox"]}
            data-color={item}
            onClick={(e) => handleColor(e)}
            style={{
              background: item,
            }}
          ></input>
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
