import { db } from "../config/config";

export const getCollectionLength = async (collection) => {
  try {
    const response = db.collection(collection);
    const data = await response.get();
    const dataArr = data.docs.map((item) => "*");
    return dataArr.length;
  } catch (err) {
    return 0;
  }
};
