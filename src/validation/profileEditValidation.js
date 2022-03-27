export const profileEditValidation = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length < 9) {
    errors.phone = "Must be 9 characters or more";
  } else {
    values.phone.split("").forEach((digit) => {
      if (+digit != digit) errors.phone = "Please enter valid phone number";
    });
  }

  return errors;
};
