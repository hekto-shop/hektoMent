import { storage, auth } from "../config/config";

export const uploadImage = (userId, file) => {
  return new Promise((resolve, reject) => {
    // create file reference
    const filePath = `users/${userId}/profile-image`;
    const fileRef = storage.ref().child(filePath);

    // upload task
    const uploadTask = fileRef.put(file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => reject(error),
      () => {
        resolve(uploadTask.snapshot.ref);
      }
    );
  });
};

export const getDownloadUrl = async (userId, currentUser) => {
  const filePath = `users/${userId}/profile-image`;
  const photoURL = await storage.ref().child(filePath).getDownloadURL();

  currentUser
    .updateProfile({
      photoURL,
    })
    .then(() => {
      console.log("Update Successful");
    })
    .catch((error) => {
      throw new Error(error);
    });
  return photoURL;
};
