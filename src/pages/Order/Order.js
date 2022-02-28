import React, { useEffect } from "react";
import classes from "./Order.module.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import OrderForm from "../../components/OrderForm/OrderForm";
import CartItems from "../../components/CartItems/CartItems";
import CartSummary from "../../components/CartSummary";

import { scrollTo } from "../../helpers/smooth-scroll";

const Order = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const currency = useSelector((state) => state.productsReducer.currency);
  const history = useHistory();
  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const VAT = (totalPrice / 1.18) * 0.18;

  useEffect(() => scrollTo(), []);

  const editCartHandler = () => {
    scrollTo();
    history.push("/cart");
  };
  return (
    <PageLayout title="Order">
      <PageContainer>
        <main className={classes.container}>
          <OrderForm />
          <CartItems cartItems={cartItems} currency={currency} />
          <CartSummary
            totalPrice={totalPrice}
            VAT={VAT}
            buttonText="Edit Cart"
            onClick={editCartHandler}
          />
        </main>
      </PageContainer>
    </PageLayout>
  );
};

export default Order;
