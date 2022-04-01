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
import { options, data } from "../../../../constants/chart";
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

  return (
    <div className={`${styles["diagram-cont"]} ${props.className}`}>
      <h2 className={styles["diagram-cont__text"]}>Action Diagram</h2>
      <div className={styles["diagram"]}>
        <Line options={options} data={data} />
      </div>
      <div className={styles['details-bottom']}>
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
