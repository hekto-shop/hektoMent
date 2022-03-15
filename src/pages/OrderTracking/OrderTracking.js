import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import classes from "./OrderTracking.module.scss";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProgressBar from "../../components/ProgressBar";
import OrderLog from "../../components/OrderLog";

const OrderTracking = () => {
  const myOrders = useSelector((store) => store.ordersReducer.myOrders);
  const [keyword, setKeyword] = useState("");

  const filteredOrders = [...myOrders].filter((order) => {
    if (keyword === "") {
      return true;
    } else {
      return order.order_number.includes(keyword);
    }
  });

  const markup = filteredOrders.reverse().map((order) => {
    const orderIsCompleted = order.order_status === "delivered";
    const date = new Date(order.order_estimation.seconds * 1000);
    const EST = new Intl.DateTimeFormat("en-UK").format(date);

    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className={classes["order-number"]}>
            ORDER <span>#{order.order_number}</span>
          </h2>
          <p className={classes["est-arrival"]}>
            {orderIsCompleted ? "Delivered" : `Est: ${EST}`}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ProgressBar order={order} />
          <OrderLog order={order} />
        </AccordionDetails>
      </Accordion>
    );
  });

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <PageLayout title="Orders Tracking">
      <PageContainer>
        <section className={classes.section}>
          <div className={classes["section-head"]}>
            <h2>My Orders</h2>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              min="0"
              placeholder="Order Number"
            />
          </div>
          {filteredOrders.length > 0 ? (
            markup
          ) : (
            <div className={classes["no-orders"]}>Nothing found</div>
          )}
        </section>
      </PageContainer>
    </PageLayout>
  );
};

export default OrderTracking;
