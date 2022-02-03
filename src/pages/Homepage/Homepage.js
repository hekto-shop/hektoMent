import React from "react";
import PageLayout from "../../containers/PageLayout";
import MainSlider from "../../components/MainSlider";
import FeaturedSlider from "../../components/FeaturedSlider";

import PageContainer from "../../containers/PageContainer";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <PageLayout title="Home" isHomepage={true}>
      <MainSlider />
      <PageContainer className={styles["featured-section"]}>
        <div className={styles["featured-title"]}>
          <h2>Featured Products</h2>
        </div>
        <FeaturedSlider />
      </PageContainer>
      <h1>Homepage</h1>
    </PageLayout>
  );
};

export default Homepage;
