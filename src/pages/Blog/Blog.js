import React from "react";
import PageLayout from "../../containers/PageLayout";
import styles from "./Blog.module.scss";
import PageContainer from "../../containers/PageContainer";
import BlogContainer from "../../components/BlogContainer";
import { useSelector } from "react-redux";

const Blog = () => {
  const blogs  = useSelector((state) => state.blogsReducer.blogs);
  const user  = useSelector((state) => state.userReducer.user);
  return (
    <PageLayout title="Blog Page">
      <PageContainer>
        <BlogContainer all={true} blogs={blogs} user={user}/>
      </PageContainer>
    </PageLayout>
  );
};

export default Blog;