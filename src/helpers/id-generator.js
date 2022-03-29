const letters =
  "abcdefghijklmnopqrstuvyxyzABCDEFGHIJKLMNOPQRSTUVYXYZ0123456789";

export const generateId = (length = 10) => {
  const idArray = [];

  for (let i = 0; i < length; i++) {
    const randomIdx = Math.trunc(Math.random() * letters.length) + 1;
    idArray.push(letters[randomIdx]);
  }

  return idArray.join("");
};
