import React from "react";
// import { Grid } from "@mui/material";
import * as img from "../../assets/img";

import styles from "./Shopex.module.scss";

import { useTheme } from '@mui/material/styles';

const Shopex = () => {
  const theme = useTheme();
  const textColor = {"color": theme.palette.text.textColor3};
  return (
    <section className={styles["shopex"]}>
      <div>
        <div className={styles["shopex-card"]}>
          <div className={styles["shopex-card__content"]}>
            <div className={styles["shopex-card__image"]}>
              <img src={img.car} alt="car"></img>
            </div>
            <div className={styles["shopex-card__about"]}>
              <h2>24/7 Support</h2>
              <p style={textColor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles["shopex-card"]}>
          <div className={styles["shopex-card__content"]}>
            <div className={styles["shopex-card__image"]}>
              <img src={img.cashback} alt="cashback"></img>
            </div>
            <div className={styles["shopex-card__about"]}>
              <h2>24/7 Support</h2>
              <p style={textColor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles["shopex-card"]}>
          <div className={styles["shopex-card__content"]}>
            <div className={styles["shopex-card__image"]}>
              <img src={img.premium} alt="premium"></img>
            </div>
            <div className={styles["shopex-card__about"]}>
              <h2>24/7 Support</h2>
              <p style={textColor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles["shopex-card"]}>
          <div className={styles["shopex-card__content"]}>
            <div className={styles["shopex-card__image"]}>
              <img src={img.support} alt="support"></img>
            </div>
            <div className={styles["shopex-card__about"]}>
              <h2>24/7 Support</h2>
              <p style={textColor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopex;
