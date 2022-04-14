
import styles from "./AllBlogs.module.scss";

import Date from '../../assets/icons/blog-date.svg'
import React from "react";
import blogImg from '../../assets/img/blog.png'
import Author from '../../assets/icons/blog-author.svg'
import RedCircle from '../../assets/icons/blog-red-circle.svg'
import BlogPagination from "../BlogPagination";

import { Link } from "react-router-dom"

const AllBlogs = (props) => {
    
    const {currentPage, totalPages, handlePagination, blogList, handleCategory} = props;
    return (
            <div className={styles["container-blogs"]}>
                {blogList.map(blog => {
                    return (
                        <div key={blog.author + blog.date}> 
                            <img src={blog.img} alt="Blog" className={styles["container-img"]}/>
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
                                    <button className={styles["date"]}>{blog.date}</button>
                                </span>
                            </div>
                            <h1 className={styles["title"]}>{blog.title}</h1>
                            <p className={styles["text"]}>{blog.text}</p>
                            <div>
                                <Link to={`/blog/${blog.title}`}>
                                    <h4 className={styles["read-more"]}>Read more</h4>
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
                    handleCategory={handleCategory}
                />
            </div>)
}

export default AllBlogs