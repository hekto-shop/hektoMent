import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { auth } from "../../config/config";
import { signupValidation } from "../../validation/signupValidation";
import { createUserDocument } from "../../helpers/user-registration";
import classes from "./SignupForm.module.scss";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CustomizedDialogs from "../../components/CustomizedDialogs";
import NumberFormat from 'react-number-format';


const SignupForm = () => {
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [numOfRows, setNumOfRows] = useState("1");
  const changeRow = () => {
    if(numOfRows === "1") {
      setNumOfRows("3");
    } else {
      setNumOfRows("1");
    }
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      phone: "995",
      email: "",
      password: "",
      password2: "",
      budget: "",
      about: "",
    },
    validate: signupValidation,
    onSubmit: (values) => {
      signup(values);
    },
  });

  async function signup({ username, phone, password, email, budget, about }) {
    try {
      setLoading(true);
      const resp = await auth.createUserWithEmailAndPassword(email, password);
      const user = resp.user;
      await user.updateProfile({ displayName: username });
      await createUserDocument({
        uid: user.uid,
        username,
        email,
        budget,
        about,
        phone,
      });
      formik.resetForm({
        username: "",
        phone: "995",
        email: "",
        password: "",
        password2: "",
        budget: "",
        about: "",
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  const redirect = () => {
    history.push("/");
  };

  return (
    <section className={classes["signup-container"]}>
      <CustomizedDialogs
        title="Error"
        message={error}
        open={Boolean(error)}
        buttonText="Okay"
        handleClose={() => setError(null)}
      />

      <CustomizedDialogs
        title="Congratulations!"
        message="You've been signed up successfully."
        open={submitted}
        buttonText="Okay"
        handleClose={redirect}
      />

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} lg={6}>
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.username}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <NumberFormat
              customInput={TextField}
              format="(###) ### - ### - ###"
              id="phone"
              name="phone"
              label="Phone Number"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="password2"
              name="password2"
              type="password"
              label="Confirm Password"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.password2}
              error={
                formik.touched.password2 && Boolean(formik.errors.password2)
              }
              helperText={formik.touched.password2 && formik.errors.password2}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="budget"
              name="budget"
              type="number"
              label="Your budget"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.budget}
              error={formik.touched.budget && Boolean(formik.errors.budget)}
              helperText={formik.touched.budget && formik.errors.budget}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              id="about"
              name="about"
              label="Tell us about your interests..."
              multiline
              variant="standard"
              fullWidth
              rows={numOfRows}
              onChange={formik.handleChange}
              value={formik.values.about}
              onFocus={changeRow}
              onBlur={changeRow}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

export default SignupForm;
