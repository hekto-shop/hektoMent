import ProfileImage from "./ProfileImage";
import ProfileCategorySpent from "./ProfileCategorySpent";
import ProfileOrderTracking from "./ProfileOrderTracking";
import ProfileDiagram from "./ProfileDiagram";

import ProfileColumn from "./ProfileColumn";

import styles from "./ProfileDetails.module.scss";

const ProfileDetails = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles["section-name"]}>Profile</h2>
      <div className={styles['details-section']}>
        <div className={styles["details-left-section"]}>
          <div className={styles["details-top-bar"]}>
            <ProfileImage className={styles["profile-image__cont"]} />
            <ProfileDiagram className={styles["profile-diagram__cont"]} />
          </div>
          <div className={styles["details-lower-bar"]}>
            <ProfileCategorySpent
              className={styles["profile-category__cont"]}
            />
            <ProfileOrderTracking className={styles["order-tracking__cont"]} />
          </div>
        </div>
        <div className={styles["details-right-section"]}>
            <ProfileColumn />
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
