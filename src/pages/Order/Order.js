import React from "react";
import classes from "./Order.module.scss";
import { useSelector } from "react-redux";

import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import OrderForm from "../../components/OrderForm/OrderForm";
import CartItems from "../../components/CartItems/CartItems";

const Order = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const currency = useSelector((state) => state.productsReducer.currency);
  return (
    <PageLayout title="Order">
      <PageContainer>
        <main className={classes.container}>
          <OrderForm />
          <CartItems cartItems={cartItems} currency={currency} />
        </main>
      </PageContainer>
    </PageLayout>
  );
};

export default Order;
