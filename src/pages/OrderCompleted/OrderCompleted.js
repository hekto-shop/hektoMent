import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./OrderCompleted.module.scss";
import * as icons from "../../assets/icons";
import { partners } from "../../assets/images";

import { scrollTo } from "../../helpers/smooth-scroll";

import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import Button from "../../components/UI/Button";

const OrderCompleted = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/shop");
  };
  useLayoutEffect(() => scrollTo(220), []);
  return (
    <PageLayout title="Order Completed">
      <PageContainer>
        <div className={classes.container}>
          <span className={classes.tick}>
            <img src={icons.redTick} alt="Success" />
          </span>
          <h2>Your Order Is Completed!</h2>
          <p>
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Button type="button" onClick={handleClick}>
            Continue Shopping
          </Button>
          <img className={classes.clock} src={icons.clock} alt="Clock" />
          <img
            className={classes.checklist}
            src={icons.checklist}
            alt="Ckecklist"
          />
        </div>
        <div className={classes.partners}>
          <img src={partners} alt="our partners" />
        </div>
      </PageContainer>
    </PageLayout>
  );
};

export default OrderCompleted;
