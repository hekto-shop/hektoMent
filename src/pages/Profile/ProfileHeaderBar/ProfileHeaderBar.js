import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../../../config/config";
import { useSession } from "../../../contexts/auth-context";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";

import { downArrow } from "../../../assets/icons";
import { profilePlaceholder } from "../../../assets/img";

import styles from "./ProfileHeaderBar.module.scss";

const ProfileHeaderBar = () => {
  const [select, setSelect] = useState(false);
  const { user } = useSession();
  const history = useHistory();

  const signoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        history.push("/homepage");
      })
      .catch((err) => console.log(err));
  };

  const selectChangeHandler = () => {
    setSelect((prevState) => !prevState);
  };

  const selectBar = (
    <>
      <div className={styles["select-bar"]}>
        <p onClick={signoutHandler}>Logout</p>
      </div>
      <Backdrop onClick={selectChangeHandler} />
    </>
  );

  const arrowClasses = select ? `${styles.arrow} ${styles.rotated}` : styles.arrow

  return (
    <header className={styles.header}>
      <h2>
        <Link to="/homepage">PoppyShop</Link>
      </h2>
      <span className={styles["profile-wrapper"]}>
        <img
          src={user?.photoURL || profilePlaceholder}
          alt="avatar"
          className={styles["profile-avatar"]}
        />
        <div className={styles["user-text"]}>
          <h4>{user?.displayName}</h4>
          <p>user</p>
        </div>
        <img src={downArrow} onClick={selectChangeHandler} alt="" className={arrowClasses}/>
        {select ? selectBar : null}
      </span>
    </header>
  );
};

export default ProfileHeaderBar;
