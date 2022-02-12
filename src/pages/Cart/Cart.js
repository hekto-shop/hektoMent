import React from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";

import * as icons from "../../assets/icons";
import classes from "./Cart.module.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartItems);
  const productList = cartItems.map((product) => {
    return (
      <tr className={classes.row} key={product.productCode}>
        <td className={classes["product-col"]}>
          <div className={classes.thumbnail}>
            <span>
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
        </td>
        <td>{product.price}</td>
        <td>5</td>
        <td>{product.price * 5}</td>
      </tr>
    );
  });

  return (
    <PageLayout title="Cart">
      <PageContainer>
        <section className={classes.section}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{productList}</tbody>
          </table>
        </section>
      </PageContainer>
    </PageLayout>
  );
};

export default Cart;
