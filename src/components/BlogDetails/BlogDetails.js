
import styles from "./BlogDetails.module.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Date from '../../assets/icons/blog-date.svg'
import React from "react";
import blogImg from '../../assets/img/blog.png'
import Author from '../../assets/icons/blog-author.svg'
import RedCircle from '../../assets/icons/blog-red-circle.svg'

import { Link } from "react-router-dom"

const BlogDetails = (props) => { 
    let blogArr = [
        { tag:'General',category:'Hobbies', img:blogImg, author:'sam', date: 'Aug 9 2020', title:'Mauriat orci non vulputate diam tincidunt nec.', text:'Lorem ipniiiiiiiiiiiiiiiit.'},
        { tag: 'Atsanil',category:'Women', img: blogImg, author: 'sm', date: 'Aug 8 2020', title:'Mauris at oci non vulputadiam tincidunt nec.', text: 'Condimentum eu m dictum at.'}, 
        { tag:'General', category:'Men',img: blogImg, author: 'sm1', date: 'Aug 7 2020', title:'Mauris at oi non vulputate diam tincidunt nec.', text: 'Lorem ipsum dolor sit aque, porta dignissim. Adipiscing purus,  id dictum at.'},
        { tag: 'abc', category:'Women',img: blogImg, author: 'sm2', date: 'Aug 6 2020', title:'Maat oi non vulputaiam tincidunt nec.', text: 'Lorem porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'}];
    
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
        <div key={currentBlog.author + currentBlog.date}> 
            <img src={currentBlog.img} alt="Blog" className={styles["container-img"]}/>
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
                    <button className={styles["date"]}>{currentBlog.date}</button>
                </span>
            </div>
            <h1 className={styles["title"]}>{currentBlog.title}</h1>
            <p className={styles["text"]}>{currentBlog.text}</p>
        </div>
    )
}

export default BlogDetails