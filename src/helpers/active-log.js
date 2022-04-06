import { db } from "../config/config";

export const uploadActiveTime = (dt, userDoc, sec) => {
  const year = dt.getFullYear();
  const month = dt.getMonth();
  const day = dt.getDate();

  const dateArr = userDoc.activeLog?.map((item) => {
    const userDt = new Date(item.date.seconds * 1000);
    return {
      year: userDt.getFullYear(),
      month: userDt.getMonth(),
      day: userDt.getDate(),
    };
  });

  const shouldUpdate = dateArr?.some((item) => {
    return item.year === year && item.month === month && item.day === day;
  });

  const activeLog = JSON.parse(JSON.stringify(userDoc?.activeLog || []));

  if (shouldUpdate) {
    const itemToBeUpdated = activeLog.find((item) => {
      const dt = new Date(item.date.seconds * 1000);

      return (
        dt.getFullYear() === year &&
        dt.getMonth() === month &&
        dt.getDate() === day
      );
    });

    itemToBeUpdated.activeTime += sec;
  } else {
    activeLog.push({
      date: dt,
      activeTime: sec,
    });
  }

  db.collection("users")
    .doc(userDoc?.uid)
    .update({
      activeLog,
    })
    .then(() => {})
    .catch((error) => {
      throw new Error(error);
    });
};
