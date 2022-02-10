import React from "react";
import PageLayout from "../../containers/PageLayout";
import MainSlider from "../../components/MainSlider";
import FeaturedSlider from "../../components/FeaturedSlider";
import Shopex from "../../components/Shopex";

import PageContainer from "../../containers/PageContainer";
import styles from "./Homepage.module.scss";
import LeatestProducts from "../../components/LeatestProducts/LeatestProducts";

const Homepage = () => {
  return (
    <PageLayout title="Home" isHomepage={true}>
      <MainSlider />
      <PageContainer>
        <section className={styles["featured-section"]}>
          <div className={styles["featured-section__title"]}>
            <h2>Featured Products</h2>
          </div>
          <FeaturedSlider />
        </section>
        <LeatestProducts />
        <section className={styles["shopex-section"]}>
          <div className={styles["shopex-section__title"]}>
            <h2>What Shopex Offer!</h2>
          </div>
          <Shopex />
        </section>
      </PageContainer>
      <h1>Homepage</h1>
    </PageLayout>
  );
};

export default Homepage;
