import React from "react";
import styles from "./BlogContainer.module.scss";
import blogImg from '../../assets/img/blog.png'
import Author from '../../assets/icons/blog-author.svg'
import Date from '../../assets/icons/blog-date.svg'
import TextField from "@mui/material/TextField";
import Facebok from'../../assets/icons/blog-facebook.svg'
import Instagram from '../../assets/icons/blog-instagram.svg'
import Twitter from '../../assets/icons/blog-twitter.svg'
import Submit from '../../assets/icons/magnifier.svg'


const Searchbar =  (
    <div>                 
        <div>Search</div>
        <form >
            <input
                type="text"
            />
        </form>
    </div>    
)

const Categories = (
    <div>
        <div>Categories</div>
            <div className={styles["container-categories"]} >
            <div>Hobbies</div>
            <div>Women</div>
            <div>Women</div>
            <div>Women</div>
            <div>Women</div>
            <div>Women</div>
        </div>
    </div>
)

const RecentPosts = (recentPosts) => {
    return (<div>
                <div>Recent posts</div>
                {recentPosts.map(post => {
                    return (
                        <div className={styles['container-recent']}> 
                            <img src={post.img} alt="Post" className={styles['container-img']} />
                            <div> 
                                <div>{post.title}</div>
                                <div>{post.date} </div>
                            </div>
                        </div>
                )})}     
        </div>)
}

const Follow = (
    <div>
        <div>Follow</div>
            <div className={styles['container-follow']}>
            <img src={Facebok} alt="Facebook"/>
            <img src={Instagram} alt="Instagram"/>
            <img src={Twitter} alt="Twitter"/>
        </div>
    </div>
)
    

const Tags = (
    <div>
        <div>Tags</div>
        <div className={styles['container-tags']} >
            <button className={styles['tag-button']}>General</button>
            <button className={styles['tag-button']}>Atsanil</button>
            <button className={styles['tag-button']}>Insas</button>
            <button className={styles['tag-button']}>Bibsaas</button>
            <button className={styles['tag-button']}>Nulla</button>
        </div>
    </div>
)


const BlogContainer = (props) => { 
    const blogArr = [{ img:blogImg, author:'sam', date: 'Aug 9 2020', title:'Mauris at orci non vulputate diam tincidunt nec.', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'},
                     {img: blogImg, author: 'sam', date: 'Aug 9 2020', title:'Mauris at orci non vulputate diam tincidunt nec.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'}, 
                     {img: blogImg, author: 'sam', date: 'Aug 9 2020', title:'Mauris at orci non vulputate diam tincidunt nec.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'}];
    
    const recentPosts = blogArr;
    return (
        <div className={styles["container-blog"]}>
            <div>
                {blogArr.map(blog => {
                    return (
                        <div> 
                            <img src={blog.img} alt="Blog" className={styles["container-img"]}/>
                            <div> 
                                <span>
                                    <img src={Author} alt="Author"/>
                                </span>
                                <span>
                                    <button className={styles["author-button"]}>{blog.author}</button>
                                </span>
                                <span> 
                                    <img src={Date} alt="Author"/>
                                </span>
                                <span>
                                    <button className={styles["date"]}>{blog.date}</button>
                                </span>
                            </div>
                            <h1>{blog.title}</h1>
                            <p>{blog.text}</p>
                            <button>Read more...</button>
                        </div>
                    )
                })}
            </div>
            <div className={styles["container-side"]}>
                {Searchbar}
                {Categories}
                {RecentPosts(recentPosts)}
                {Follow}
                {Tags}
            </div>
        </div>
    )
}

export default BlogContainer