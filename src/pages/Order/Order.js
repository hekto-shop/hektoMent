import React from "react";
import classes from "./Order.module.scss";
import { useSelector } from "react-redux";

import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import OrderForm from "../../components/OrderForm/OrderForm";
import CartItems from "../../components/CartItems/CartItems";
import CartSummary from "../../components/CartSummary";

const Order = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const currency = useSelector((state) => state.productsReducer.currency);

  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const VAT = (totalPrice / 1.18) * 0.18;

  const handleOrder = () => console.log("Order Placed");
  return (
    <PageLayout title="Order">
      <PageContainer>
        <main className={classes.container}>
          <OrderForm />
          <CartItems cartItems={cartItems} currency={currency} />
          <CartSummary
            totalPrice={totalPrice}
            VAT={VAT}
            buttonText="Place Order"
            onClick={handleOrder}
          />
        </main>
      </PageContainer>
    </PageLayout>
  );
};

export default Order;
