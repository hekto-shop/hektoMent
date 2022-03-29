import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getUserData } from "../../../store/thunk";
import { useSession } from "../../../contexts/auth-context";
import { profileEditValidation } from "../../../validation/profileEditValidation";
import { updateUserDocument } from "../../../helpers/user-update";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CustomizedDialogs from "../../../components/CustomizedDialogs";

import styles from "./ProfileEdit.module.scss";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const { user } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      phone: "",
    },
    validate: profileEditValidation,
    onSubmit: (values) => {
      update(values);
    },
  });

  async function update({ username, phone }) {
    try {
      setLoading(true);
      await updateUserDocument({
        uid: user.uid,
        username,
        phone,
      });
      formik.resetForm({
        username: "",
        phone: "",
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  const updateUser = () => {
    dispatch(getUserData(user?.uid));
    setSubmitted(false);
  };

  return (
    <section className={styles.section}>
      <CustomizedDialogs
        title="Error"
        message={error}
        open={Boolean(error)}
        buttonText="Okay"
        handleClose={() => setError(null)}
      />

      <CustomizedDialogs
        title="Congratulations!"
        message="You've changed your profile data successfully."
        open={submitted}
        buttonText="Okay"
        handleClose={updateUser}
      />
      <h2>Edit Profile</h2>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} lg={6}>
            <TextField
              id="username"
              name="username"
              label="Update Username"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.username}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="phone"
              name="phone"
              label="Update Phone Number"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Button
              style={{ backgroundColor: "#332d76" }}
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
            >
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

export default ProfileEdit;
