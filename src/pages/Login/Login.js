import React, { useLayoutEffect, useRef } from "react";
import PageLayout from "../../containers/PageLayout";
import LoginForm from "../../components/LoginForm";
import { scrollTo } from "../../helpers/smooth-scroll";

import styles from "./Login.module.scss";
import * as img from "../../assets/images";

const Login = () => {
  const loginRef = useRef();

  useLayoutEffect(() => {
    scrollTo(loginRef.current.offsetTop - 250);
  }, []);

  console.log("loginRef", loginRef);

  return (
    <PageLayout title="Login">
      <div ref={loginRef}>
        <LoginForm />
      </div>
      <div className={styles["img-container"]}>
        <img src={img.partners} alt="partners" />
      </div>
    </PageLayout>
  );
};

export default Login;
