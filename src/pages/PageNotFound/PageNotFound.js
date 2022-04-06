import { useLayoutEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import { scrollTo } from "../../helpers/smooth-scroll";


import styles from "./PageNotFound.module.scss";
import { notFound } from "../../assets/img";
import { partners } from "../../assets/images";

const PageNotFound = () => {
  const history = useHistory();
  const sectionRef = useRef();

    useLayoutEffect(() => {
        scrollTo(sectionRef.current.offsetTop - 200)
    }, [])

  return (
    <PageLayout title="404 Not Found">
      <PageContainer>
        <section className={styles["section"]} ref={sectionRef}>
          <div className={styles["section-content"]}>
            <div className={styles["img-cont"]}>
              <img src={notFound} alt="" className={styles["not-found"]}></img>
            </div>
            <h2 className={styles["section-title"]}>
              oops! The page you requested was not found!
            </h2>
            <button
              className={styles["btn"]}
              onClick={() => history.push("/homepage")}
            >
              Back to Home
            </button>
            <div className={styles["img-cont"]}>
              <img src={partners} alt="" className={styles["partners"]} />
            </div>
          </div>
        </section>
      </PageContainer>
    </PageLayout>
  );
};

export default PageNotFound;
