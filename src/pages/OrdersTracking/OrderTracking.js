import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import Loader from "../../components/UI/Loader";
import classes from "./OrderTracking.module.scss";

import ProgressBar from "../../components/ProgressBar";
import OrderLog from "../../components/OrderLog";
import CartItems from "../../components/CartItems/CartItems";

const OrderTracking = () => {
  const myOrders = useSelector((store) => store.ordersReducer.myOrders);
  const allProducts = useSelector((store) => store.productsReducer.products);
  const currency = useSelector((store) => store.productsReducer.currency);
  const [order, setOrder] = useState(null);
  const params = useParams();

  const orderNum = params.orderId;
  const orderedProducts = order?.ordered_product.map((prod) => {
    const product = { ...allProducts.find((el) => el.itemId === prod.itemId) };
    product.totalPrice = prod.quantity * product.price;
    return product;
  });

  useEffect(() => {
    setOrder((prevState) => {
      return [...myOrders]?.find((order) => order?.order_number === orderNum);
    });
  }, [myOrders]);

  const orderIsCompleted = order ? order.order_status === "delivered" : null;
  const date = order ? new Date(order.order_estimation.seconds * 1000) : null;
  const EST = order ? new Intl.DateTimeFormat("en-UK").format(date) : null;

  const markup = (
    <section className={classes.section}>
      <div>
        <div className={classes.title}>
          <h2 className={classes["order-number"]}>
            ORDER <span>#{order?.order_number}</span>
          </h2>
          <p className={classes["est-arrival"]}>
            {orderIsCompleted ? "Delivered" : `Est: ${EST}`}
          </p>
        </div>
        <div>
          <ProgressBar order={order} />
          <div className={classes.details}>
            {orderedProducts && (
              <div className={classes["ordered-product"]}>
                <h2 className={classes.heading}>Ordered Products</h2>
                <CartItems
                  cartItems={orderedProducts}
                  showControls={false}
                  currency={currency}
                />
              </div>
            )}
            <OrderLog order={order} />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <PageLayout title="Orders Tracking">
      <PageContainer>{order ? markup : <Loader />}</PageContainer>
    </PageLayout>
  );
};

export default OrderTracking;
