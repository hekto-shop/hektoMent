import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategorySum } from "../../../../helpers/category-sum-price";
import CategoryBar from "./CategoryBar";

import styles from "./ProfileCategorySpent.module.scss";

const ProfileCategorySpent = (props) => {
  const [categoryInfo, setCategoryInfo] = useState([]);
  const ordersArr = useSelector((state) => state.ordersReducer.myProductOrders);
  // const orderProductsArr = useSelector(
  //   (state) => state.ordersReducer.myProductCategories
  // );
  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    const categoryInfoRes = getCategorySum([...ordersArr], [...products]);
    setCategoryInfo(categoryInfoRes);
  }, [ordersArr, products]);

  return (
    <div className={`${styles["category-cont"]} ${props.className}`}>
      <div className={styles["cont-text"]}>
        <h2 className={styles["cont-header"]}>Shop by Categories</h2>
        <p className={styles["cont-para"]}>
          money spent according each categories
        </p>
      </div>
      <div className={styles["category-showcase"]}>
        {categoryInfo.map((item) => {
          return <CategoryBar category={item} />;
        })}
      </div>
    </div>
  );
};

export default ProfileCategorySpent;
