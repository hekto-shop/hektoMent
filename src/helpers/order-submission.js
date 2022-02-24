import { db } from "../config/config";

export const submitOrder = async (values) => {
  // const docRef = db.doc(`/users/${user.uid}`);

  // const userProfile = {
  //   username: user.username,
  //   email: user.email,
  //   budget: user.budget,
  //   about: user.about,
  //   phone: user.phone,
  // };

  // return docRef.set(userProfile);
  console.log(values);
};
