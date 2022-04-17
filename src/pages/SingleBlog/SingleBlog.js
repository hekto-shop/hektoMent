
import styles from "./SingleBlog.module.scss";
import { useParams } from "react-router-dom";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import BlogContainer from "../../components/BlogContainer";
import { useSelector } from "react-redux";

const SingleBlog = () => {
    const blogs  = useSelector((state) => state.blogsReducer.blogs);
    console.log(blogs);
    return (
        <PageLayout title="Single Blog">
            <PageContainer>
                <BlogContainer All={false} blogs={blogs} />
            </PageContainer>
        </PageLayout>)
 }

export default SingleBlog;