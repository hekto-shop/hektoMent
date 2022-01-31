import React from "react";
import PageLayout from "../../containers/PageLayout";
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";
import * as img from "../../assets/images";

const Login = () => {
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
