export const getintouchValidation = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }
  
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!values.subject) {
        errors.subject = "Required";
    } else if (values.subject.length > 10) {
        errors.subject = "Must be 10 characters or less";
    } 

    if (!values.message) {
        errors.message = "Required";
    } else if (values.message.length < 5) {
        errors.message = "Message too short, Must be 5 characters or more";
    }
    
    return errors;
};
  