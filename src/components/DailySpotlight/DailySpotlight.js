import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PageContainer from "../../containers/PageContainer";
import Button from "../UI/Button";
import { formatCurrency } from "../../helpers/format-number";
import styles from "./DailySpotlight.module.scss";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  spotlightSection:{
    backgroundColor: (theme)=> theme.palette.background.secondary,
    minHeight: '540px'
  }
});

const DailySpotlight = (props) => {
  const theme = useTheme();
  const stylesClasses = useStyles(theme);

  const products = useSelector((state) => state.productsReducer.products);
  const currency = useSelector((state) => state.productsReducer.currency);
  const history = useHistory();

  let startDay = 0;
  let day = new Date().getDay();

  const stockProducts = [...products]
    .filter((item) => {
      return item.quantity > 0;
    })
    .sort((a, b) => {
      let firstAverage =
        a.rating.ratings.reduce((acc, item) => {
          return acc + item;
        }, 0) / products.length;
      let secAverage =
        b.rating.ratings.reduce((acc, item) => {
          return acc + item;
        }, 0) / products.length;

      if (firstAverage > secAverage) return -1;
      if (firstAverage < secAverage) return 1;
      return 0;
    });

  if (stockProducts.length === 0) return <div>Loading...</div>;

  return (
    <section className={`${stylesClasses.spotlightSection} ${props.className}`}>
      <PageContainer>
        <div className={styles["spotlight-container"]}>
          <div className={styles["spotlight-container__product"]}>
            <img src={stockProducts[day - startDay].productImage} alt=""></img>
          </div>
          <div className={styles["spotlight-container__details"]}>
            <h2 className={styles["spotlight-container__title"]}>
              Unique Features Of leatest & Trending Products
            </h2>
            <ul className={styles["spotlight-details__features"]}>
              <li className={styles["spotlight-features__item"]}>
                All frames constructed with hardwood solids and laminates
              </li>
              <li className={styles["spotlight-features__item"]}>
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </li>
              <li className={styles["spotlight-features__item"]}>
                Arms, backs and seats are structurally reinforced
              </li>
            </ul>
            <div className={styles["spotlight-container__price"]}>
              <Button
                type="button"
                onClick={() =>
                  history.push(
                    `/product/${stockProducts[day - startDay].productCode}`
                  )
                }
              >
                Add To Cart
              </Button>
              <div className={styles["spotlight-price__details"]}>
                <p className={styles["spotlight-details__name"]}>
                  {stockProducts[day - startDay].name}
                </p>
                <p className={styles["price"]}>
                  {formatCurrency(
                    stockProducts[day - startDay].price,
                    currency
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default DailySpotlight;
