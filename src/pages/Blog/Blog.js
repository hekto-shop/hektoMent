import React from "react";
import PageLayout from "../../containers/PageLayout";
import styles from "./Blog.module.scss";
import PageContainer from "../../containers/PageContainer";

const Blog = () => {
  return (
    <PageLayout title="Blog">
      <PageContainer>
        <div >
            Blog Page
        </div>
      </PageContainer>
    </PageLayout>
  );
};

export default Blog;