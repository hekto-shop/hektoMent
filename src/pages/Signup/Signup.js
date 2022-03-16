import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../containers/PageLayout";
import SignupForm from "../../components/SignupForm";
import { useSession } from "../../contexts/auth-context";
import { scrollTo } from "../../helpers/smooth-scroll";

import classes from "./Signup.module.scss";

const Signup = () => {
  const { user } = useSession();

  useLayoutEffect(() => {
    scrollTo(220);
  }, []);

  return (
    <PageLayout title="Sign up">
      <SignupForm />
      <div className={classes["login-text"]}>
        <p>Already have an account?</p>
        <br />
        <Link to="/login"> Login here</Link>
      </div>
    </PageLayout>
  );
};

export default Signup;
