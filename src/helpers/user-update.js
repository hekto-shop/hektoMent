import { db } from "../config/config";

export const updateUserDocument = async (user) => {
  const docRef = db.doc(`/users/${user.uid}`);
  return docRef.update(user);
};
