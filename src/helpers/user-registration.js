import { db } from "../config/config";

export const createUserDocument = async (user) => {
  const docRef = db.doc(`/users/${user.uid}`);

  const userProfile = {
    uid: user.uid,
    username: user.username,
    email: user.email,
    budget: user.budget,
    about: user.about,
    phone: user.phone,
  };

  return docRef.set(userProfile);
};
