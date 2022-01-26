import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../containers/PageLayout";
import SignupForm from "../../components/SignupForm";
import { useSession } from "../../contexts/auth-context";
import classes from "./Signup.module.scss";

const Signup = () => {
  const { user } = useSession();
  console.log(user);
  return (
    <PageLayout title="Sign up">
      <SignupForm />
      <div>
        <p>{user.username}</p>
        <p>{user.about}</p>
        <p>{user.budget}</p>
        <p>{user.email}</p>
        <p>{user.uid}</p>
      </div>
    </PageLayout>
  );
};

export default Signup;
