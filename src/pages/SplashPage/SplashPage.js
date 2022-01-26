import { useRef } from "react";
import { Container } from "@mui/material";
import { useHistory } from "react-router-dom";
import * as icons from "../../assets/icons/index";
import styles from "./SplashPage.module.scss";

const SplashPage = () => {
  const history = useHistory();
  const splashPg = useRef();

  const redirect = (path) => {
    splashPg.current.classList.add(styles.hide);
    setTimeout(() => {
      history.push(path);
    }, 200);
  };

  return (
    <div ref={splashPg} className={styles["splash-page"]}>
      <Container>
        <div className={styles["splash-page__top-bar"]}>
          <h1 className={styles["splash-page__logo"]}>Ecommerce</h1>
          <div className={styles["splash-page__navigation"]}>
            <p onClick={() => redirect("/login")}>login / </p>
            <p onClick={() => redirect("/signup")}>SignUp</p>
          </div>
        </div>
        <section className={styles["splash-page__section"]}>
          <p onClick={() => redirect("/shop")}>Shop It</p>
          <h2>Hekto E-Com</h2>
        </section>
        <p
          onClick={() => redirect("/homepage")}
          className={styles["splash-page__explore"]}
        >
          Explore
        </p>
        <div onClick={() => redirect("/homepage")}>
          <img src={icons.arrow} alt="arrowSvg" className={styles.arrow} />
        </div>
      </Container>
    </div>
  );
};

export default SplashPage;
