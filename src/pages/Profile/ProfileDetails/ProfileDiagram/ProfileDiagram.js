import styles from "./ProfileDiagram.module.scss";
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
import {options, data} from '../../../../constants/chart'

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
  return (
    <div className={`${styles["diagram-cont"]} ${props.className}`}>
      <h2 className={styles["diagram-cont__text"]}>Action Diagram</h2>
      <div className={styles["diagram"]}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default ProfileDiagram;
