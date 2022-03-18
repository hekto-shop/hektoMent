import React from "react";
import classes from "./CartItems.module.scss";
import Button from "../UI/Button";
import ProductItem from "./ProductItem";
import { useTheme } from '@mui/material/styles';

const CartItems = (props) => {
  const theme = useTheme();
  const cartTextColor = {"color": theme.palette.text.cartTextColor};
  
  const {
    cartItems,
    currency,
    handleIncrease,
    handleDecrease,
    handleRemove,
    handleClearCart,
    showControls,
  } = props;

  const tableClass = showControls
    ? classes.table
    : `${classes.table} ${classes.narrow}`;

  const headings = showControls ? (
    <>
      <h3 style={cartTextColor}>Product</h3>
      <h3 style={cartTextColor}>Price</h3>
      <h3 style={cartTextColor}>Quantity</h3>
      <h3 className={classes["heading-total"]} style={cartTextColor}>Total</h3>
    </>
  ) : (
    <></>
  );

  const productList = cartItems.map((product) => {
    return (
      <ProductItem
        product={product}
        showControls={showControls}
        currency={currency}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemove={handleRemove}
      />
    );
  });

  return (
    <div className={tableClass}>
      {headings}
      {productList}
      {showControls && (
        <div className={classes.clear}>
          <Button onClick={handleClearCart}>Clear Cart</Button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
