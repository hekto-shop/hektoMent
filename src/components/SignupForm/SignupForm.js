import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { auth } from '../../config/config';
import { signupValidation } from '../../validation/Validation';
import classes from './SignupForm.module.scss';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomizedDialogs from '../../components/CustomizedDialogs';

const SignupForm = () => {
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: '',
      phone: '',
      email: '',
      password: '',
      password2: '',
      budget: '',
      about: '',
    },
    validate: signupValidation,
    onSubmit: (values) => {
      signup(values);
    },
  });

  async function signup({
    username,
    phoneNumber,
    password,
    email,
    budget,
    about,
  }) {
    try {
      const resp = await auth.createUserWithEmailAndPassword(email, password);
      formik.resetForm({
        username: '',
        phone: '',
        email: '',
        password: '',
        password2: '',
        budget: '',
        about: '',
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  }

  const redirect = () => {
    history.push('/login');
  };
  return (
    <section className={classes['signup-container']}>
      <CustomizedDialogs
        title="Error"
        message={error}
        open={Boolean(error)}
        buttonText="Okay"
        handleClose={() => setError(null)}
      />

      <CustomizedDialogs
        title="Congratulations!"
        message="You've been signed up successfully. Please go to Login Page"
        open={submitted}
        buttonText="Login"
        handleClose={redirect}
      />

      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />

        <TextField
          id="phone"
          name="phone"
          label="Phone Number"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <TextField
          id="password2"
          name="password2"
          type="password"
          label="Confirm Password"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.password2}
          error={formik.touched.password2 && Boolean(formik.errors.password2)}
          helperText={formik.touched.password2 && formik.errors.password2}
        />

        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          id="budget"
          name="budget"
          type="number"
          label="Your budget"
          variant="standard"
          onChange={formik.handleChange}
          value={formik.values.budget}
          error={formik.touched.budget && Boolean(formik.errors.budget)}
          helperText={formik.touched.budget && formik.errors.budget}
        />

        <TextField
          id="about"
          name="about"
          label="Tell usabout yourself..."
          multiline
          variant="standard"
          rows="3"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.about}
        />

        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </section>
  );
};

export default SignupForm;
