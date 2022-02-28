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
  const userBalance = useSelector((state) => state.userReducer.user.budget);
  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const buttonIsDisabled = userBalance < totalPrice;

  useEffect(() => scrollTo(), []);

  const editCartHandler = () => {
    scrollTo();
    history.push("/cart");
  };
  return (
    <PageLayout title="Order">
      <PageContainer>
        <main className={classes.container}>
          <OrderForm buttonIsDisabled={buttonIsDisabled} />
          <CartItems cartItems={cartItems} currency={currency} />
          <CartSummary
            totalPrice={totalPrice}
            userBalance={userBalance}
            currency={currency}
            buttonText="Edit Cart"
            onClick={editCartHandler}
          />
        </main>
      </PageContainer>
    </PageLayout>
  );
};

export default Order;
