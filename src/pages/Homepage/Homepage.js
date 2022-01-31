import React from "react";
import PageLayout from "../../containers/PageLayout";
import MainSlider from "../../components/MainSlider";

const Homepage = () => {
  return (
    <PageLayout title="Home" isHomepage={true}>
      <MainSlider />
      <h1>Homepage</h1>
    </PageLayout>
  );
};

export default Homepage;
