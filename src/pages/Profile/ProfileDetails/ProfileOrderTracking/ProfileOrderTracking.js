import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import OrderSlider from "./OrderSlider";

import styles from "./ProfileOrderTracking.module.scss";
import './slider.css'

const ProfileOrderTracking = (props) => {
  const myOrders = useSelector((state) => state.ordersReducer.myOrders);
  const myProducts = useSelector(
    (state) => state.ordersReducer.myProductOrders
  );

  console.log("orderTracking", myOrders);
  console.log("orderTrackingProducts", myProducts);

  const myOrderedProducts = [...myProducts].map((product, ind) => {
    return (
      <OrderSlider
        key={ind}
        index={ind}
        image={product.productImage}
        order={myOrders}
      />
    );
  });


  return (
    <div className={`${styles["order-cont"]} ${props.className} order-slider`}>
        <div className={styles['cont-text']}>
          <h2 className={styles['cont-header']}>Order Tracking</h2>
        </div>
        <Carousel itemsToShow={1}>{myOrderedProducts}</Carousel>
    </div>
  );
};

export default ProfileOrderTracking;
