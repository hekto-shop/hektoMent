import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { auth } from "../../config/config";
import CustomizedDialogs from "../CustomizedDialogs";
import { loginValidation } from "../../validation/loginValidation";

import { TextField, Button } from "@mui/material";
import styles from "./LoginForm.module.scss";

import { useTheme } from '@mui/material/styles';

const LoginForm = () => {
  const theme = useTheme();
  const backgroundColor = {"backgroundColor": theme.palette.background.paper};
  const formShadow = (theme.palette.mode === 'dark') ? {'boxShadow': '0 0 8px 4px rgb(248, 248, 251)'} :
                      {'boxShadow': '0 0 25px 10px rgb(248, 248, 251'} ;

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidation,
    onSubmit: (values) => {
      login(values);
    },
  });

  const login = async ({ username, email, password }) => {
    try {
      setLoading(true);
      const resp = await auth.signInWithEmailAndPassword(email, password);
      const user = resp.user;
      await user.updateProfile({ displayName: username });
      formik.resetForm({
        email: "",
        password: "",
      });
      const redirect = () => {
        history.push("/");
      };
      redirect();
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <section className={styles["login-container"]} style={backgroundColor}>
      <CustomizedDialogs
        title="Error"
        message={error}
        open={Boolean(error)}
        buttonText="Close"
        handleClose={() => setError(null)}
      />

      <form onSubmit={formik.handleSubmit} style={formShadow}>
        <div>
          <h3 className={styles["login-container__title"]}>Login</h3>
          <p className={styles["login-container__para"]}>
            Please login using account detail bellow.
          </p>
        </div>
        <div className={styles["login-container__inputs"]}>
          <TextField
            name="email"
            label="Email Address"
            className={styles["login-inputs__email"]}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            className={styles["login-inputs_password"]}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div className={styles["login-container__info"]}>
          <p>Forgot Your Password?</p>
          <Button variant="contained" type="submit" disabled={loading}>
            Sign in
          </Button>
          <Link to="/signup" className={styles["login-info__register"]}>
            Don’t have an Account? Create account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
