import React from "react";
import classes from "./OrderForm.module.scss";

import { useFormik } from "formik";
import { orderValidation } from "../../validation/orderValidation";
import { useSession } from "../../contexts/auth-context";
import { submitOrder } from "../../helpers/order-submission";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const OrderForm = () => {
  const { user } = useSession();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  console.log(user);
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      postalCode: "",
      orderedItems: cartItems,
    },
    validate: orderValidation,
    onSubmit: (values) => {
      values.orderedItems = cartItems;
      submitOrder(values);
    },
  });

  const autoFill = () => {
    if (user) {
      formik.values.email = user.email;
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} lg={12}>
            <TextField
              id="email"
              name="email"
              label="Email or Phone number"
              variant="standard"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              variant="standard"
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="standard"
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              id="address"
              name="address"
              label="Address"
              variant="standard"
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              id="apartment"
              name="apartment"
              label="Apartment, suite, etc. (optional)"
              variant="standard"
              fullWidth
              value={formik.values.apartment}
              onChange={formik.handleChange}
              error={
                formik.touched.apartment && Boolean(formik.errors.apartment)
              }
              helperText={formik.touched.apartment && formik.errors.apartment}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <TextField
              id="city"
              name="city"
              label="City"
              variant="standard"
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="state"
              name="state"
              label="State or Country"
              variant="standard"
              fullWidth
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="postalCode"
              name="postalCode"
              label="Postal Code"
              variant="standard"
              fullWidth
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              error={
                formik.touched.postalCode && Boolean(formik.errors.postalCode)
              }
              helperText={formik.touched.postalCode && formik.errors.postalCode}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default OrderForm;
