
import styles from "./BlogDetails.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Date from '../../assets/icons/blog-date.svg'
import React from "react";
import Author from '../../assets/icons/blog-author.svg'
import { Link } from "react-router-dom"

const BlogDetails = (props) => { 
    
    const { blogList} = props;

    let blogArr = blogList;

    const params = useParams();
    
    const [currentBlog, setCurrentBlog] = useState({});

    useEffect(() => {
        blogArr.map(blog => {
            if(blog.title === params.title) {
                setCurrentBlog(blog);
            }
        })
    }, [])
    return (
        (Object.keys(currentBlog).length !== 0 ) ?
        <div key={currentBlog.blogId}> 
            <img src={currentBlog.mainImage} alt="Blog" className={styles["container-img"]}/>
            <div> 
                <span>
                    <img src={Author} alt="Author"/>
                </span>
                <span>
                    <button className={styles["author-button"]}>{currentBlog.author}</button>
                </span>
                <span> 
                    <img src={Date} alt="Date" className={styles["date-icon"]}/>
                </span>
                <span>
                    <button className={styles["date"]}>{currentBlog.date.toDate().toString().substring(4,15)}</button>
                </span>
            </div>
            <h1 className={styles["title"]}>{currentBlog.title}</h1>
            <p className={styles["text"]}>{currentBlog.text}</p>
        </div> : <div>d</div>
    )
}

export default BlogDetails