import React from "react";
import classes from "./ProgressBar.module.scss";
import {
  whiteStar,
  whiteCircle,
  checkSquare,
  flag,
  truck,
  clockBlue,
  packageIcon,
} from "../../assets/icons";

const steps = [
  {
    status: "pendingApproval",
    icon: clockBlue,
    text: "Pending Approval",
  },
  {
    status: "approved",
    icon: checkSquare,
    text: "Approved",
  },
  {
    status: "shipped",
    icon: packageIcon,
    text: "Shipped",
  },
  {
    status: "enRoute",
    icon: truck,
    text: "En-Route",
  },
  {
    status: "delivered",
    icon: flag,
    text: "Delivered",
  },
];

const ProgressBar = ({ order }) => {
  const getStepPosition = (transferStatus) =>
    steps.findIndex(({ status }) => status === transferStatus);
  const completedSteps = steps.slice(
    0,
    getStepPosition(order.order_status) + 1
  );
  const barPercentage =
    completedSteps.length > 0
      ? `${(completedSteps.length / steps.length) * 100}%`
      : "0%";

  return (
    <div className={classes.progressbar}>
      <span className={classes.track}>
        {steps.map((step, idx) => {
          const isCompleted = completedSteps.some(
            (item) => item.status === step.status
          );
          return (
            <div className={classes["icons-container"]}>
              <span
                style={{ animationDelay: `${idx / 6}s` }}
                className={
                  isCompleted
                    ? classes["circle-completed"]
                    : classes["circle-uncompleted"]
                }
              >
                <img src={isCompleted ? whiteStar : whiteCircle} alt="circle" />
              </span>
              <div className={classes.icon}>
                <img src={step.icon} alt={step.text} />
                <p>{step.text}</p>
              </div>
            </div>
          );
        })}
        <span
          className={classes["track-completed"]}
          style={{
            width: barPercentage,
          }}
        ></span>
      </span>
    </div>
  );
};

export default ProgressBar;
