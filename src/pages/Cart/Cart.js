import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCartQuantity,
  removeFromCart,
  clearCart,
} from "../../store/thunk";

import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import CartItems from "../../components/CartItems/CartItems";

import * as icons from "../../assets/icons";
import classes from "./Cart.module.scss";
import CartSummary from "../../components/CartSummary";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const currency = useSelector((state) => state.productsReducer.currency);
  const userBalance =
    useSelector((state) => state.userReducer.user?.budget) || 0;
  const dispatch = useDispatch();
  const history = useHistory();
  const goToCheckout = () => history.push("/order");

  const handleIncrease = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecrease = (product) => {
    dispatch(decreaseCartQuantity(product));
  };
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const buttonIsDisabled = userBalance < totalPrice;

  if (cartItems.length === 0) {
    return (
      <PageLayout title="Cart">
        <PageContainer>
          <div className={classes.emptycart}>
            Cart is empty. Please go to Shop page and select items you wish to
            buy
          </div>
        </PageContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Cart">
      <PageContainer>
        <section className={classes.section}>
          <CartItems
            cartItems={cartItems}
            currency={currency}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleRemove={handleRemove}
            handleClearCart={handleClearCart}
            showControls={true}
          />

          <CartSummary
            onClick={goToCheckout}
            userBalance={userBalance}
            currency={currency}
            totalPrice={totalPrice}
            buttonText="Go to Checkout"
            buttonIsDisabled={buttonIsDisabled}
          />
        </section>
      </PageContainer>
    </PageLayout>
  );
};

export default Cart;
