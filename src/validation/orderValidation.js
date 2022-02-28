export const orderValidation = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.city) {
    errors.city = "Required";
  }

  if (!values.state) {
    errors.state = "Required";
  }

  if (!values.postalCode) {
    errors.postalCode = "Required";
  }

  return errors;
};
