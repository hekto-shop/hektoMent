import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { days, months } from "../../../../constants/dateArray";

import { rightArrow } from "../../../../assets/icons";
import styles from "./ProfileColumn.module.scss";

const ProfileColumn = () => {
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  const myProducts = useSelector(
    (state) => state.ordersReducer.myProductOrders
  );

  const todaysDate = new Date();
  const dateFormat = `${
    days[todaysDate.getDay()]
  }, ${todaysDate.getUTCDate()} ${
    months[todaysDate.getMonth()]
  } ${todaysDate.getUTCFullYear()}`;

  const orderHistory = myProducts
    .map((product, ind, arr) => {
      return (
        <div className={styles["order-item"]} key={ind}>
          <div className={styles["order-info"]}>
            <div className={styles["order-image"]}>
              <img src={product.productImage} alt="" />
            </div>
            <div className={styles["order-details"]}>
              <h4>{product.name}</h4>
              {ind + 1 === arr.length && (
                <p className={styles["new-item"]}>New</p>
              )}
            </div>
            <button
              onClick={() => history.push(`/product/${product.productCode}`)}
            >
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      );
    })
    .reverse();

  return (
    <div className={styles["column-cont"]}>
      <div className={styles["cont-text"]}>
        <h2 className={styles["cont-budget"]}>$ {user.budget?.toFixed(2)}</h2>
        <p className={styles["cont-date"]}>{dateFormat}</p>
      </div>
      <div className={styles["cont-orders"]}>
        <h3 className={styles['cont-title']}>Order History</h3>
        <div className={styles["order-column"]}>{myProducts.length ? orderHistory : <h3 className={styles['no-orders']}>No Orders have found</h3>}</div>
      </div>
    </div>
  );
};

export default ProfileColumn;
