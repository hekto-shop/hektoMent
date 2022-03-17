import React from "react";
import classes from "./OrderLog.module.scss";

const OrderLog = (props) => {
  const log = props.order.log;

  return (
    <div className={classes.container}>
      <h3>Log:</h3>
      {log.map((item) => {
        const date = new Date(item.date.seconds * 1000);
        const formattedDate = new Intl.DateTimeFormat("en-UK", {
          dateStyle: "long",
          timeStyle: "short",
        }).format(date);

        return (
          <div className={classes["log-item"]}>
            <span className={classes.date}>{formattedDate}</span>
            <span className={classes.action}> - {item.action}</span>
          </div>
        );
      })}
    </div>
  );
};

export default OrderLog;
