import React from "react";
import classes from "./CartItems.module.scss";
import Button from "../UI/Button";
import * as icons from "../../assets/icons";

const CartItems = (props) => {
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

  const totalsClass = showControls
    ? classes["total-col"]
    : ` ${classes["total-col"]} ${classes["small-text"]} `;

  const productList = cartItems.map((product) => {
    return (
      <>
        <div className={classes["product-col"]}>
          <div className={classes.thumbnail}>
            {showControls && (
              <span onClick={() => handleRemove(product)}>
                <img src={icons.deleteIcon} alt="remove" />
              </span>
            )}
            <img
              className={classes.image}
              src={product.productImage}
              alt={product.name}
            />
          </div>
          <div className={classes["product-name"]}>
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
          </div>
        </div>
        {showControls && (
          <>
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
              <span className={classes["quantity-value"]}>
                {product.quantity}{" "}
              </span>
              <span
                className={classes["quantity-button"]}
                onClick={() => handleIncrease(product)}
              >
                +
              </span>
            </div>{" "}
          </>
        )}
        <div className={totalsClass}>
          {`${currency} ${product.totalPrice.toFixed(2)}`}
        </div>
      </>
    );
  });

  const headings = showControls ? (
    <>
      <h3>Product</h3>
      <h3>Price</h3>
      <h3>Quantity</h3>
      <h3 className={classes["heading-total"]}>Total</h3>
    </>
  ) : (
    <></>
  );

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
