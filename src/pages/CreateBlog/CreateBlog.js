import React from 'react'
import styles from "./CreateBlog.module.scss";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import BlogEditor from '../../components/TextEditor';

const CreateBlog = () => {
    
  return (
    <PageLayout title="Create Blog">
        <PageContainer>
            <BlogEditor />
        </PageContainer>
    </PageLayout>
  )
}

export default CreateBlog