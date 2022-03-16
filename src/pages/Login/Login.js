import React, { useLayoutEffect } from "react";
import PageLayout from "../../containers/PageLayout";
import LoginForm from "../../components/LoginForm";
import { scrollTo } from "../../helpers/smooth-scroll";

import styles from "./Login.module.scss";
import * as img from "../../assets/images";

const Login = () => {
  useLayoutEffect(() => {
    scrollTo(220);
  }, []);

  return (
    <PageLayout title="Login">
      <LoginForm />
      <div className={styles["img-container"]}>
        <img src={img.partners} alt="partners" />
      </div>
    </PageLayout>
  );
};

export default Login;
