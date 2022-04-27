import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./OrderHistory.module.scss";

import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import Loader from "../../components/UI/Loader";
import { Link } from "react-router-dom";
import { steps } from "../../components/ProgressBar/ProgressBar";
import { scrollTo } from "../../helpers/smooth-scroll";

const OrderHistory = () => {
  const myOrders = useSelector((store) => store.ordersReducer.myOrders);
  console.log(myOrders);
  useEffect(() => scrollTo(), []);

  const markup = myOrders.map((order) => {
    const date = new Date(order.log[0].date.seconds * 1000);
    const submissionDate = new Intl.DateTimeFormat("en-UK", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);

    const status = steps.find((el) => el.status === order.order_status).text;
    return (
      <>
        <Link to={`/order-tracking?trackingId=${order.trackingId}`}>
          {order.trackingId}
        </Link>
        <span>{submissionDate}</span>
        <span>{status}</span>
      </>
    );
  });

  return (
    <PageLayout title="Order History">
      <PageContainer>
        {myOrders.length === 0 ? (
          <p className={classes["no-orders"]}>You have no orders yet</p>
        ) : (
          <div className={classes.table}>
            <h3>Tracking ID</h3>
            <h3>Submission Date</h3>
            <h3>Status</h3>
            {markup}
          </div>
        )}
      </PageContainer>
    </PageLayout>
  );
};

export default OrderHistory;
