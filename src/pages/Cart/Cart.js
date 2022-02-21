import React from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import Button from "../../components/UI/Button";

import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCartQuantity,
  removeFromCart,
  clearCart,
} from "../../store/thunk";
import * as icons from "../../assets/icons";
import classes from "./Cart.module.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const currency = useSelector((state) => state.productsReducer.currency);
  const dispatch = useDispatch();

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
  const productList = cartItems.map((product) => {
    return (
      <>
        <div className={classes["product-col"]}>
          <div className={classes.thumbnail}>
            <span onClick={() => handleRemove(product)}>
              <img src={icons.deleteIcon} alt="remove" />
            </span>
            <img
              className={classes.image}
              src={product.productImage}
              alt={product.name}
            />
          </div>
          <div className={classes["product-name"]}>
            <h3>{product.name}</h3>
          </div>
        </div>
        <div
          className={classes["price-col"]}
        >{`${currency} ${product.price.toFixed(2)}`}</div>
        <div className={classes["quantity-col"]}>
          <span
            className={classes["quantity-button"]}
            onClick={() => handleDecrease(product)}
          >
            -
          </span>
          <span className={classes["quantity-value"]}>{product.quantity} </span>
          <span
            className={classes["quantity-button"]}
            onClick={() => handleIncrease(product)}
          >
            +
          </span>
        </div>
        <div className={classes["total-col"]}>
          {`${currency} ${product.totalPrice.toFixed(2)}`}
        </div>
      </>
    );
  });

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
          <div className={classes.table}>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 className={classes["heading-total"]}>Total</h3>

            {productList}
            <div className={classes.clear}>
              <Button onClick={handleClearCart}>Clear Cart</Button>
            </div>
          </div>
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
              <button className={classes.checkout}>Go to Checkout</button>
            </div>
          </div>
        </section>
      </PageContainer>
    </PageLayout>
  );
};

export default Cart;
