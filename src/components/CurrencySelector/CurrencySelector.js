import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../../store/thunk";
import classes from "./CurrencySelector.module.scss";
import * as icons from "../../assets/icons";

import Backdrop from "../UI/Backdrop";

const CurrencySelector = () => {
  const currency = useSelector((store) => store.productsReducer.currency);
  const [showOptions, setShowOptions] = useState(false);
  const allCurrencies = ["USD", "EUR", "GEL"];
  const notSelected = allCurrencies.filter((cur) => cur !== currency);
  const dispatch = useDispatch();
  const handleCurrency = (e) => {
    dispatch(changeCurrency(e.target.dataset.value));
    toggleOptions();
  };

  const toggleOptions = () => {
    setShowOptions((prevState) => !prevState);
  };

  const arrowClass = showOptions ? classes.rotated : "";

  return (
    <div className={classes.container}>
      <div className={classes.label} onClick={toggleOptions}>
        <span>{currency}</span>
        <img className={arrowClass} src={icons.arrow} alt="toggle" />
      </div>
      {showOptions && (
        <>
          <div onClick={handleCurrency} className={classes.options}>
            {notSelected.map((el) => (
              <span key={el} data-value={el}>
                {el}
              </span>
            ))}
          </div>
          <Backdrop onClick={toggleOptions} />
        </>
      )}
    </div>
  );
};

export default CurrencySelector;
