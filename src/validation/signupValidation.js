export const signupValidation = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (values.phone.length < 9) {
    errors.phone = 'Must be 9 characters or more';
  } else {
    values.phone.split('').forEach((digit) => {
      if (+digit != digit) errors.phone = 'Please enter valid phone number';
    });
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (!values.password2) {
    errors.password2 = 'Please confirm the password';
  } else if (values.password !== values.password2) {
    errors.password2 = 'Passwords do not match!';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.budget) {
    errors.budget = 'Required';
  } else if (values.budget < 10 || values.budget > 5000) {
    errors.budget = 'Budget must be from 10 to 5,000';
  }

  return errors;
};
