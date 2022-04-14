
import styles from "./SingleBlog.module.scss";
import { useParams } from "react-router-dom";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import BlogContainer from "../../components/BlogContainer";

const SingleBlog = () => {
    const params = useParams();
    return (
        <PageLayout title="Single Blog">
            <PageContainer>
                <BlogContainer All={false} />
            </PageContainer>
        </PageLayout>)
 }

export default SingleBlog;