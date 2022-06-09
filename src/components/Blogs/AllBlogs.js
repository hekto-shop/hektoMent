import styles from "./AllBlogs.module.scss";
import Date from '../../assets/icons/blog-date.svg'
import React from "react";
import Author from '../../assets/icons/blog-author.svg'
import RedCircle from '../../assets/icons/blog-red-circle.svg'
import BlogPagination from "../BlogPagination";
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom"


const getBlogComponent = (blog) => {
    var blogComp = document.createElement('div');
    blogComp.innerHTML = blog.text;
    return blogComp;
}

const getImageLink = (blogComp) => {
    let link = ''
    blogComp.childNodes.forEach(elem => {
        if(elem instanceof HTMLImageElement) {
            if(link === '') {
                link = elem.getAttribute('src');
            }
        }
        if(link === '') {
            elem.childNodes.forEach(elemOfChild => {
                if(elemOfChild instanceof HTMLImageElement) {
                    if(link === '') {
                        link = elemOfChild.getAttribute('src');
                    }
                }
            })
        }
    })
    return link;
}

const AllBlogs = (props) => {
    const theme = useTheme();
    const readMoreColor = {"color": theme.palette.text.primary};
    const {currentPage, totalPages, handlePagination, blogList} = props;

    const getPartOfText = (text) => {
        let newText = '';
        let lastSpaceIndex = 0;
        let index = 0;
        while(true) {
            if(index >= 20) {
                break;
            }
            let tmpInd = text.indexOf(' ',lastSpaceIndex+1);
            if(tmpInd === -1) {
                break;
            }
            lastSpaceIndex = tmpInd;
            index++;
        }
        if(lastSpaceIndex > 300) {
            lastSpaceIndex = 300;
        }
        let lastIndex  = text.indexOf('.', lastSpaceIndex);
        if(lastIndex === -1) {
            lastIndex = lastSpaceIndex
        }
        if(lastIndex === 0) {
            if(text.length > 301) {
                lastIndex = 300;
            } else {
                lastIndex = text.length - 2;
            }
        }
        newText = text.substring(0, lastIndex+1);
        return newText;
    }

    return (
            <div className={styles["container-blogs"]}>
                {blogList.map(blog => {
                    let blogComp = getBlogComponent(blog)
                    let image = blog.mainImage;
                    if (typeof image == 'undefined') {
                        image = getImageLink(blogComp);
                    }
                    return (
                        <div key={blog.blogId}> 
                            {image !== '' ? <img src={image} alt="Blog" className={styles["container-img"]}/> : null}
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
                            <p className={styles["text"]}>{getPartOfText(blogComp.textContent)}</p>
                            <div>
                                <Link to={`/blog/${blog.blogId}`}>
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
                    blogList={blogList}
                />
            </div>)
}

export default AllBlogs