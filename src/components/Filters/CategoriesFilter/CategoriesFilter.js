import { useSelector } from "react-redux";

const CategoriesFilter = (props) => {
  const categories = useSelector((state) => state.ctgReducer.categories);
  const { styles, handleCategory } = props;

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

  return (
    <div className={styles["category-filter"]}>
      <h2>Categories</h2>
      {categoriesSide}
    </div>
  );
};

export default CategoriesFilter;
