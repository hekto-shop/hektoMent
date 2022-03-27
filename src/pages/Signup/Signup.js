import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../containers/PageLayout";
import SignupForm from "../../components/SignupForm";
import { useSession } from "../../contexts/auth-context";
import { scrollTo } from "../../helpers/smooth-scroll";

import classes from "./Signup.module.scss";

const Signup = () => {
  const signupRef = useRef();
  const { user } = useSession();

  useLayoutEffect(() => {
    scrollTo(signupRef.current.offsetTop - 250);
  }, []);

  return (
    <PageLayout title="Sign up">
      <div ref={signupRef}>
        <SignupForm />
      </div>
      <div className={classes["login-text"]}>
        <p>Already have an account?</p>
        <br />
        <Link to="/login"> Login here</Link>
      </div>
    </PageLayout>
  );
};

export default Signup;
