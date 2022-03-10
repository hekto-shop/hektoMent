import React from "react";
import PageLayout from "../../containers/PageLayout";
import styles from "./Contact.module.scss";
import InfoAboutUs from "../../components/InfoAboutUs";
import PageContainer from "../../containers/PageContainer";
import ContactWay from "../../components/ContactWay";
import GetInTouch from "../../components/GetInTouch";
import contact  from "../../assets/img/contact.png"

const Contact = () => {
  return (
    <PageLayout title="Contact">
      <PageContainer>
        <div className={styles["row-container"]}>
          <InfoAboutUs />
          <ContactWay  />
          <GetInTouch/>
          <div className={styles["img-container"]}>
            <img src={contact} alt="contact" id={styles["contact-img"]}/>
          </div>
        </div>
      </PageContainer>
    </PageLayout>
  );
};

export default Contact;
