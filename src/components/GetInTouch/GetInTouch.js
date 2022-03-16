import { useState } from "react";
import styles from "./GetInTouch.module.scss";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { getintouchValidation } from "../../validation/getintouchValidation";
import { TextField } from "@mui/material";
import CustomizedDialogs from "../CustomizedDialogs";
import Grid from "@mui/material/Grid";

import { emailConfig } from "../../constants/emailJS";

const GetInTouch = () => {
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleEmail = async (values) => {
    setLoading(true);
    try {
      const res = await emailjs.send(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        values,
        emailConfig.USER_ID
      );
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: getintouchValidation,
    onSubmit: (values) => {
      handleEmail(values);
      formik.resetForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    },
  });

  return (
    <div>
      <CustomizedDialogs
        title="Error"
        message={error}
        open={Boolean(error)}
        buttonText="Okay"
        handleClose={() => setError(null)}
      />

      <CustomizedDialogs
        title="Success!"
        message="Your message was successfully sent. We will get back go you shortly."
        open={submitted}
        buttonText="Close"
        handleClose={() => setSubmitted(false)}
      />
      <div className={styles["get-in-touch-title"]}>Get In Touch</div>
      <div className={styles["get-in-touch-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
        bibendum quam.
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id={styles["form-name"]}
              type="text"
              name="name"
              label="Your Name*"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              size="small"
              inputProps={{ style: { fontFamily: "Lato" } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id={styles["form-email"]}
              type="text"
              name="email"
              label="Your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              size="small"
              inputProps={{ style: { fontFamily: "Lato" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id={styles["form-subject"]}
              type="text"
              name="subject"
              label="Subject*"
              onChange={formik.handleChange}
              value={formik.values.subject}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
              fullWidth
              size="small"
              inputProps={{ style: { fontFamily: "Lato" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id={styles["form-message"]}
              type="text"
              name="message"
              label="Type Your Message*"
              onChange={formik.handleChange}
              value={formik.values.message}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              fullWidth
              multiline
              inputProps={{ style: { fontFamily: "Lato" } }}
            />
          </Grid>
          <Grid item xs={6}>
            <input
              className={styles["form-submit"]}
              type="submit"
              value="Send Mail"
              disabled={loading}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default GetInTouch;
