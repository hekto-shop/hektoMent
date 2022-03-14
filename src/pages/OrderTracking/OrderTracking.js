import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import classes from "./OrderTracking.module.scss";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tracker from "../../components/Tracker";

const OrderTracking = () => {
  const myOrders = useSelector((store) => store.ordersReducer.myOrders);
  console.log(myOrders);

  const markup = myOrders.map((order) => {
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
        </AccordionSummary>
        <AccordionDetails>
          <Tracker order={order} />
        </AccordionDetails>
      </Accordion>
    );
  });
  return (
    <PageLayout title="Orders Tracking">
      <PageContainer>
        <section className={classes.section}>{markup}</section>
      </PageContainer>
    </PageLayout>
  );
};

export default OrderTracking;
