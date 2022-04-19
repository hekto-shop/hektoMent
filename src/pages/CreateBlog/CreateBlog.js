import React from 'react'
import styles from "./CreateBlog.module.scss";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import { useSelector } from 'react-redux';

const CreateBlog = () => {
    
  const user  = useSelector((state) => state.useReducer);
  return (
    <PageLayout title="Create Blog">
        <PageContainer>
            CreateBlog
        </PageContainer>
    </PageLayout>
  )
}

export default CreateBlog