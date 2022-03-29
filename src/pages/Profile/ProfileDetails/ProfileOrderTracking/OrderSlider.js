import { Link } from "react-router-dom";

import styles from "./OrderSlider.module.scss";

const OrderSlider = (props) => {
  const { index, image, order } = props;

  return (
    <div className={styles["order-slider"]}>
      <h3 className={styles['order-slider__text']}># {order[index]?.order_number}</h3>
      <div className={styles['image-cont']}>
        <img src={image} className={styles["image-cont__image"]} alt=''/>
      </div>
      <Link to={`/order-tracking/${order[index]?.order_number}`}>Track It!</Link>
    </div>
  );
};

export default OrderSlider;
