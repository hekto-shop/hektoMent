import { useHistory } from "react-router-dom";

import styles from "./OrderSlider.module.scss";

const OrderSlider = (props) => {
  const history = useHistory();

  const { index, image, order } = props;

  const redirectHandler = () => {
    history.push(`/order-tracking?trackingId=${order[index]?.trackingId}`)
  }

  return (
    <div className={styles["order-slider"]}>
      <h3 className={styles['order-slider__text']}># {order[index]?.trackingId}</h3>
      <div className={styles['image-cont']}>
        <img src={image} className={styles["image-cont__image"]} alt=''/>
      </div>
      <button onClick={redirectHandler}>Track It!</button>
    </div>
  );
};

export default OrderSlider;
