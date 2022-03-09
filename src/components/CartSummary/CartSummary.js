import React from "react";
import classes from "./CartSummary.module.scss";
import * as icons from "../../assets/icons";

import { formatCurrency } from "../../helpers/format-number";

const CartSummary = (props) => {
  return (
    <div className={classes.tools}>
      <h3>Summary</h3>
      <div className={classes.totals}>
        <div className={classes["totals-row"]}>
          <h4>Totals:</h4>
          <span>{formatCurrency(props.totalPrice, props.currency)}</span>
        </div>
        <div className={classes["totals-row"]}>
          <h4>Your Balance:</h4>
          <span>{formatCurrency(props.userBalance, props.currency)}</span>
        </div>

        <div className={classes.taxinfo}>
          <img src={icons.greenTick} alt="tick" />
          <p>Shipping charges are included in price</p>
        </div>

        <button
          disabled={props.buttonIsDisabled}
          onClick={props.onClick}
          className={classes.checkout}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
