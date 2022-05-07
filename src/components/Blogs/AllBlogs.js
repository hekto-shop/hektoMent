import styles from "./AllBlogs.module.scss";
import Date from '../../assets/icons/blog-date.svg'
import React from "react";
import Author from '../../assets/icons/blog-author.svg'
import RedCircle from '../../assets/icons/blog-red-circle.svg'
import BlogPagination from "../BlogPagination";
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom"

const AllBlogs = (props) => {
    const theme = useTheme();
    const readMoreColor = {"color": theme.palette.text.primary};
    const {currentPage, totalPages, handlePagination, blogList} = props;

    const getPartOfText = (text) => {
        let newText = '';
        let lastSpaceIndex = 0;
        for(let i=0; i < 30; i++) {
            lastSpaceIndex = text.indexOf(' ',lastSpaceIndex+1);
        }
        let lastIndex  = text.indexOf('.', lastSpaceIndex);
        newText = text.substring(0, lastIndex+1);
        return newText;
    }

    return (
            <div className={styles["container-blogs"]}>
                {blogList.map(blog => {
                    return (
                        <div key={blog.blogId}> 
                            <img src={blog.mainImage} alt="Blog" className={styles["container-img"]}/>
                            <div> 
                                <span>
                                    <img src={Author} alt="Author"/>
                                </span>
                                <span>
                                    <button className={styles["author-button"]}>{blog.author}</button>
                                </span>
                                <span> 
                                    <img src={Date} alt="Date" className={styles["date-icon"]}/>
                                </span>
                                <span>
                                    <button className={styles["date"]}>{blog.date.toDate().toString().substring(4,15)}</button>
                                </span>
                            </div>
                            <h1 className={styles["title"]}>{blog.title}</h1>
                            <p className={styles["text"]}>{getPartOfText(blog.text)}</p>
                            <div>
                                <Link to={`/blog/${blog.title}`}>
                                    <span className={styles["read-more"]} style={readMoreColor}>Read more</span>
                                    <img src={RedCircle} alt="Circle" className={styles["red-circle"]}/>
                                </Link>
                            </div>
                        </div>
                    )
                })}
                <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePagination={handlePagination}
                />
            </div>)
}

export default AllBlogs