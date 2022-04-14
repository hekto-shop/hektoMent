import React from "react";
import PageLayout from "../../containers/PageLayout";
import styles from "./Blog.module.scss";
import PageContainer from "../../containers/PageContainer";
import BlogContainer from "../../components/BlogContainer";

const Blog = () => {
  return (
    <PageLayout title="Blog Page">
      <PageContainer>
        <BlogContainer all={true}/>
      </PageContainer>
    </PageLayout>
  );
};

export default Blog;