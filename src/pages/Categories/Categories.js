import { useLayoutEffect, useRef } from "react";
import PageLayout from "../../containers/PageLayout";
import PageContainer from "../../containers/PageContainer";
import {categories} from '../../constants/categories'
import SingleCategory from "../../components/SingleCategory";
import {scrollTo} from '../../helpers/smooth-scroll'

import styles from "./Categories.module.scss";

const Categories = () => {
    const categoryRef = useRef();

    useLayoutEffect(() => {
        scrollTo(categoryRef.current.offsetTop - 250)
    }, [])

    return (
        <PageLayout title="Categories">
            <PageContainer>
                <section ref={categoryRef} className={styles['section']}>
                    {categories.map((category) => {
                        return <SingleCategory category={category}/>
                    })}
                </section>
            </PageContainer>
        </PageLayout>
    )
};

export default Categories;
