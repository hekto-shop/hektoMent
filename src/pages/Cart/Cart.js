import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const currency = useSelector((state) => state.productsReducer.currency);
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
  const VAT = (totalPrice / 1.18) * 0.18;

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
          <div className={classes.tools}>
            <h3>Cart Tools</h3>
            <div className={classes.totals}>
              <div className={classes["totals-row"]}>
                <h4>Totals:</h4>
                <span>$ {totalPrice.toFixed(2)}</span>
              </div>
              <div className={classes["totals-row"]}>
                <h4>VAT (Included):</h4>
                <span>${VAT.toFixed(2)}</span>
              </div>
              <div className={classes.taxinfo}>
                <img src={icons.greenTick} alt="tick" />
                <p>Shipping charges are calculated at checkout</p>
              </div>

              <button onClick={goToCheckout} className={classes.checkout}>
                Go to Checkout
              </button>
            </div>
          </div>
        </section>
      </PageContainer>
    </PageLayout>
  );
};

export default Cart;
