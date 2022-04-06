import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { days } from "../../../../constants/dateArray";
import { useSelector } from "react-redux";

import styles from "./ProfileDiagram.module.scss";
import { profileOrder, garbage } from "../../../../assets/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProfileDiagram = (props) => {
  const myOrders = useSelector((state) => state.ordersReducer.myOrders);
  const user = useSelector((state) => state.userReducer.user);

  const userActiveTime = user.activeLog?.map((item) => {
    return Math.round(item.activeTime / 1000 / 60);
  });
  const userActiveDates = user.activeLog?.map((item) => {
    const userDt = new Date(item.date.seconds * 1000);
    return days[userDt.getDay()];
  });

   const data = {
    labels: userActiveDates,
    datasets: [
      {
        label: "Action Diagram",
        data: userActiveTime,
        borderColor: "#4F4282",
        backgroundColor: "#CCE8FE",
      },
    ],
  };

   const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        // display: false,
        grid: {
          display: true,
        },
      },
      yAxes: {
        // display: false,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.5,
        borderJoinStyle: "round",
      },
    },
  };

  return (
    <div className={`${styles["diagram-cont"]} ${props.className}`}>
      <h2 className={styles["diagram-cont__text"]}>Action Diagram</h2>
      <div className={styles["diagram"]}>
        <Line data={data} options={options}/>
      </div>
      <div className={styles["details-bottom"]}>
        <div className={styles["details-left"]}>
          <div className={styles["order-icon"]}>
            <img className={styles["profile-icon"]} src={profileOrder} alt="" />
          </div>
          <h3 className={styles["details-title"]}>Ordered</h3>
          <p className={styles["details-para"]}>{myOrders.length} Product</p>
        </div>
        <div className={styles["details-left"]}>
          <div className={styles["garbage-icon"]}>
            <img className={styles["profile-icon"]} src={garbage} alt="" />
          </div>
          <h3 className={styles["details-title"]}>Canceled</h3>
          <p className={styles["details-para"]}>0 Product</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDiagram;
