
import styles from "./BlogDetails.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Date from '../../assets/icons/blog-date.svg'
import React from "react";
import Author from '../../assets/icons/blog-author.svg'
import { Link } from "react-router-dom"
import { ConstructionOutlined } from "@mui/icons-material";
import { db } from "../../config/config";


const BlogDetails = (props) => {  
    const params = useParams();
    
    const [currentBlog, setCurrentBlog] = useState({});

    useEffect(() => {
        db.collection('blogs').doc(params.blogId).get()
        .then(snapshot => setCurrentBlog(snapshot.data()))
    }, [])
    return (
        (Object.keys(currentBlog).length !== 0 ) ?
        <div key={currentBlog.blogId}> 
            {typeof currentBlog.mainImage != 'undefined' ? 
                <img src={currentBlog.mainImage} alt="Blog" className={styles["container-img"]}/>
            : null }
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
            <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: currentBlog.text }} />
        </div> : <div> </div>
    )
}

export default BlogDetails