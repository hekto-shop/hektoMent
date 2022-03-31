import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import classes from "./OrderTracking.module.scss";

import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import ProgressBar from "../../components/ProgressBar";
import OrderLog from "../../components/OrderLog";
import CartItems from "../../components/CartItems/CartItems";
import Searchbar from "../../components/Searchbar";
import Loader from "../../components/UI/Loader";

import { scrollTo } from "../../helpers/smooth-scroll";

const OrderTracking = () => {
  // Global State
  const myOrders = useSelector((store) => store.ordersReducer.myOrders);
  const allProducts = useSelector((store) => store.productsReducer.products);
  const currency = useSelector((store) => store.productsReducer.currency);

  // Local state
  const [fallback, setFallback] = useState(<Loader />);

  // Variables
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  let trackingId = params.get("trackingId");
  let order = [...myOrders]?.find((order) => order?.trackingId === trackingId);
  const orderedProducts = order?.ordered_product.map((prod) => {
    const product = { ...allProducts.find((el) => el.itemId === prod.itemId) };
    product.totalPrice = prod.quantity * product.price;
    return product;
  });
  const orderIsCompleted = order ? order.order_status === "delivered" : null;
  const date = order ? new Date(order.order_estimation.seconds * 1000) : null;
  const EST = order ? new Intl.DateTimeFormat("en-UK").format(date) : null;

  // Side Effects
  useEffect(() => {
    scrollTo();
    const timeout = setTimeout(() => {
      if (!order)
        setFallback(
          <p className={classes["no-orders"]}>
            We could not find anything with the following tracking id:
            <span>"{trackingId}"</span>
          </p>
        );
    }, 4000);

    return () => clearTimeout(timeout);
  }, [trackingId]);

  // Handlers
  const handleSearch = (keyword) => {
    setFallback(<Loader />);
    params.set("trackingId", keyword);
    const newURL = `?${params.toString()}`;
    history.push({ pathname: location.pathname, search: newURL });
  };

  // Markups
  let trackingMarkup = (
    <section className={classes.section}>
      <div>
        <div className={classes.title}>
          <h2 className={classes["order-number"]}>
            TRACKING ID: <span>{order?.trackingId}</span>
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
      <PageContainer>
        <div className={classes["searchbar-container"]}>
          <div className={classes["searchbar"]}>
            <Searchbar placeholder="Tracking ID" onSearch={handleSearch} />
          </div>
        </div>
        {order ? trackingMarkup : fallback}
      </PageContainer>
    </PageLayout>
  );
};

export default OrderTracking;
