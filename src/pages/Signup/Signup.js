import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../containers/PageLayout";
import SignupForm from "../../components/SignupForm";
import classes from "./Signup.module.scss";

const Signup = () => {
  return (
    <PageLayout title="Sign up">
      <SignupForm />
    </PageLayout>
  );
};

export default Signup;
