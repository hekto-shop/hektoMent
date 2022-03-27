import { Link } from "react-router-dom";

import styles from "./ProfileNavigation.module.scss";
import { profile, envelope, order, edit, target } from "../../../assets/icons";

const ProfileNavigation = (props) => {
  return (
    <aside className={`${styles["navigation-side"]} ${props.style}`}>
      <ul className={styles["navigation-side__items"]}>
        <Link to="/profile">
          <li>
            <img
              src={profile}
              alt="profile"
              className={styles["navigation-icon"]}
            />
          </li>
        </Link>
        <Link to="/products">
          <li>
            <img
              src={envelope}
              alt="envelope"
              className={styles["navigation-icon"]}
            />
          </li>
        </Link>
        <Link to="/profile/edit">
          <li>
            <img src={edit} alt="edit" className={styles["navigation-icon"]} />
          </li>
        </Link>
        <Link to="/products">
          <li>
            <img
              src={order}
              alt="order"
              className={styles["navigation-icon"]}
            />
          </li>
        </Link>
        <Link to="/products">
          <li>
            <img
              src={target}
              alt="target"
              className={styles["navigation-icon"]}
            />
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default ProfileNavigation;
