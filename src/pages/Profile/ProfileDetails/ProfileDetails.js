import ProfileImage from "./ProfileImage";

import styles from "./ProfileDetails.module.scss";

const ProfileDetails = () => {
  return (
    <section className={styles.section}>
      <h2>Profile</h2>
      <div className={styles["details-section"]}>
        <div className={styles["details-top-bar"]}>
          <ProfileImage />
          <div></div>
        </div>
        <div className={styles["details-lower-bar"]}>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
