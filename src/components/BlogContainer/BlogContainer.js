import React from "react";
import styles from "./BlogContainer.module.scss";
import Facebok from'../../assets/icons/blog-facebook.svg'
import Instagram from '../../assets/icons/blog-instagram.svg'
import Twitter from '../../assets/icons/blog-twitter.svg'
import { useHistory, useLocation } from "react-router-dom";
import {
    makeSlice
} from "../../helpers/product-list-reducer";
import { useEffect, useState } from "react";
import BlogDetails from "../BlogDetails";
import { Link } from "react-router-dom";
import AllBlogs from "../Blogs";
import { useTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { db } from "../../config/config";
import NoImage from "../../assets/img/no-image.png";


const getCategory = (blogArr,params) => { 
    let category = '';
    blogArr.map(blog => {
        if(blog.blogId === params.blogId) {
            category = blog.category;
        }
    })
    return category;
}


const getTag = (blogArr, params) => { 
    let tag = '';
    blogArr.map(blog => {
        if(blog.blogId === params.blogId) {
            tag = blog.tag;
        }
    })
    return tag;
}

const getImageLink = (blog) => {
    var blogComp = document.createElement('div');
    blogComp.innerHTML = blog.text;
    let link = ''
    blogComp.childNodes.forEach(elem => {
        if(elem instanceof HTMLImageElement) {
            if(link === '') {
                link = elem.getAttribute('src');
            }
        }
    })    
    return link;
}



const RecentPosts = (recentPosts) => {
    
    const theme = useTheme();
    const recentPostsColor = {"color": theme.palette.text.recentPosts};
    return (
            <div className={styles["recent-posts"]}>
                <div className={styles["side-titles"]}>Recent posts</div>
                <div className={styles['container-recent-posts']}>
                    {recentPosts.map(post => {
                        let image = post.mainImage;
                        if (typeof image == 'undefined') {
                            image = getImageLink(post);
                        }
                        return (
                            <Link to={`/blog/${post.title}`} key={post.blogId} className={styles['container-recent']}> 
                                {image !== '' ? <img src={image} alt="Post" className={styles['container-img']} /> : 
                                    <img src={NoImage} alt="Post" className={styles['container-img']} />}
                                <div> 
                                    <div className={styles['recent-title']} style={recentPostsColor}>{post.title}</div>
                                    <div className={styles['recent-date']}>{post.date.toDate().toString().substring(4,15)}</div>
                                </div>
                            </Link>
                    )})}    
                </div> 
            </div>)
}




const SimilarPosts = (blogArr, params, currentBlog) => {

    let category = currentBlog.category;
    let similarPostsArr = [];
    blogArr.map(blog => {
        if(blog.category === category && blog.blogId !== params.blogId) {
            similarPostsArr.push(blog);
        }
    })
    const theme = useTheme();
    const recentPostsColor = {"color": theme.palette.text.recentPosts};
    
    return (similarPostsArr.length !== 0 ?
                <div className={styles["recent-posts"]}>
                    <div className={styles["side-titles"]}>Similar posts</div>
                    <div className={styles['container-recent-posts']}>
                        {similarPostsArr.map((post, ind) => {
                            let image = post.mainImage;
                            if (typeof image == 'undefined') {
                                image = getImageLink(post);
                            }
                            if(ind < 3) {
                                return (
                                    <Link to={`/blog/${post.title}`} key={post.blogId} className={styles['container-recent']}> 
                                        {image !== '' ? <img src={image} alt="Post" className={styles['container-img']} /> : 
                                            <img src={NoImage} alt="Post" className={styles['container-img']} />}
                                        <div> 
                                            <div className={styles['recent-title']} style={recentPostsColor}>{post.title}</div>
                                            <div className={styles['recent-date']}>{post.date.toDate().toString().substring(4,15)}</div>
                                        </div>
                                    </Link>
                                )
                            }
                        })}    
                    </div> 
                </div> : null
            )
}

const Follow = (
    <div className={styles["follow"]}>
        <div className={styles["side-titles"]}>Follow</div>
        <div className={styles['container-follow']}>
            <img src={Facebok} alt="Facebook" className={styles['follow']}/>
            <img src={Instagram} alt="Instagram" className={styles['follow']}/>
            <img src={Twitter} alt="Twitter" className={styles['follow']}/>
        </div>
    </div>
)
    


const BlogContainer = (props) => { 
    const {all, blogs, user} = props;
    let blogArr =[...blogs];
    blogArr.sort((a,b) => {
        if(a.date > b.date) {
            return -1;
        }
        if(a.date < b.date) {
            return 1;
        }
        return 0;
    })
    const [blogList, setBlogList] = useState(blogArr);
    let categories = ['Hobbies', 'Women', 'Men', 'Shopping', 'Nature', 'Health']
    let tags = ['general', 'new', 'business', 'blog']

    
    const parameters = useParams();
    const [search, setSearch] = useState("");
    const [checkCategories, setCheckCategories] = useState(false);
    const [checkTags, setCheckTags] = useState(false)


    const location = useLocation();
    const history = useHistory();   
    const params = new URLSearchParams(location.search);
    const perPage = 3;
    const currentPage = parseInt(params.get("page")) || 1;
    const totalPages = Math.trunc(blogArr.length / perPage) + 1;

    
    const recentPosts = makeSlice(blogArr, 1, perPage);

    const [currentBlog, setCurrentBlog] = useState({});
    useEffect(() => {
        if(!all) {
            db.collection('blogs').doc(parameters.blogId).get()
                .then(snapshot => setCurrentBlog(snapshot.data()))
        }
    }, [])

    const updateURL = (name, value) => {
        const params = new URLSearchParams(location.search);
        params.set(name, value);
        const newURL = `?${params.toString()}`;
        history.push({ pathname: location.pathname, search: newURL });
    }; 

    const handleSearchBar = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handlePagination = (e) => {
        window.scrollTo({ top: 400, behavior: "smooth" });
        updateURL("page", currentPage + +e.target.value);
    };

    const handleCategory = (e) => {
        const currentValue = params.get("cat");
        if (!e.target.checked) {
          const newValue = currentValue.split("+").filter((item) => item !== e.target.name).join("+");
          updateURL("cat", newValue);
        } else {
          const newValue = currentValue ? currentValue + "+" + e.target.name: e.target.name;
          updateURL("cat", newValue);
        }
        setCheckCategories(prev => !prev)
    };

    const handleTags = (e) => {
        const currentValue = params.get("tag");
        if (!e.target.checked) {
          const newValue = currentValue.split("+").filter((item) => item !== e.target.name).join("+");
          updateURL("tag", newValue);
        } else {
          const newValue = currentValue ? currentValue + "+" + e.target.name: e.target.name;
          updateURL("tag", newValue);
        }
        setCheckTags(prev => !prev);
    }


    const filterCategories = (blogArr, url) => {
        let checkedCategories = [];
        categories.map(category => {
            if(url.includes(category)) {
                checkedCategories.push(category);
            }
        })
        if(checkedCategories.length === 0) {
            return blogArr;
        }
        let newBlogArr = [];
        blogArr.map(blog => {
            if(checkedCategories.includes(blog.category)) {
                newBlogArr.push(blog);
            }
        })
        return newBlogArr;
    }
    const filterTags = (blogArr, url) => {
        let checkedTags = [];
        tags.map(tag => {
            if(url.includes(tag)) {
                checkedTags.push(tag);
            }
        })
        if(checkedTags.length === 0) {
            return blogArr;
        }
        let newBlogArr = [];
        blogArr.map(blog => {
            checkedTags.map(checked => {
                if(blog.tag.includes(checked)){
                    if(!newBlogArr.includes(blog)){
                        newBlogArr.push(blog);
                    }
                }
            })
        })
        return newBlogArr;
    }

    
    const filterSearch = (blogArr) => {
        if(search === '') {
            return blogArr;
        }
        let newBlogArr = [];
        blogArr.map(blog => {
            let titleLowerCase = blog.title.toLowerCase();
            let searchLowerCase = search.toLowerCase();
            if(titleLowerCase.includes(searchLowerCase)) {
                newBlogArr.push(blog);
            }
        })
        return newBlogArr;
    }

    
    const filterBlogs = (blogArr) => {
        let url = location.search;
        let newBlogArr = filterCategories(blogArr, url);
        newBlogArr = filterTags(newBlogArr, url);
        newBlogArr = filterSearch(newBlogArr)
        return newBlogArr;
    }

    useEffect( () => {
        const FilteredBlogs = filterBlogs(blogArr);
        const blogsPage = makeSlice(FilteredBlogs, currentPage, perPage);
        setBlogList(blogsPage);
    }, [checkCategories, checkTags, search, currentPage]) 
 

    return (
        <div className={styles["container"]}>
            {all ? 
                <AllBlogs 
                    blogList = {blogList}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePagination={handlePagination}
                /> :
                <BlogDetails/>
            }
            
            <div className={styles["container-side"]}>
                <div className={styles["container-create-blog"]}>   
                    <Link  to={typeof user !== "undefined" ? `/create-blog` :`/login` } className={styles["create-blog-button"]}>
                        Create Blog
                    </Link>
                </div>
                {all?
                    <div className={styles["container-search"]}>                 
                        <div className={styles["side-titles"]}>Search</div>
                        <form >
                            <input
                                type="text"
                                placeholder="Search for posts"
                                className={styles["search-form"]}
                                onChange={handleSearchBar}
                            />
                        </form>
                    </div> : <></>
                }
                <div>
                    <div className={styles["side-titles"]}>Categories</div>
                    <div className={styles["container-categories"]} >
                        {categories.map (category => {
                            return <div key={category}>
                                        <input  type='checkbox' 
                                                className={styles["checkbox"]} 
                                                name={category}
                                                id={category} 
                                                onChange={(e) => handleCategory(e)}
                                                disabled={!all}/>
                                        <label className={((document.getElementById(category) !== null && 
                                                            document.getElementById(category).checked) ||
                                                            currentBlog.category===category) ? 
                                                            [styles["category"], styles["category-checked"]].join(' '): styles["category"]} 
                                                            htmlFor={category}> {category} </label>
                                    </div>
                        })}
                    </div>
                </div>
                {all ? RecentPosts(recentPosts) : SimilarPosts(blogArr, parameters, currentBlog)}
                <div>
                    <div className={styles["side-titles"]} >Tags</div>
                    <div className={styles['container-tags']} >
                        {tags.map(tag => {
                            return  <div key={tag}> 
                                        <input  type='checkbox' 
                                                className={styles["checkbox"]} 
                                                name={tag}
                                                id={tag} 
                                                onChange={(e) => handleTags(e)}
                                                disabled={!all}/>
                                        <label className={((document.getElementById(tag) !== null && 
                                                            document.getElementById(tag).checked) || 
                                                            (typeof currentBlog.tag !== 'undefined' && currentBlog.tag.includes(tag))) ? 
                                                            [styles["tag-button"], styles["tag-checked"]].join(' ') : 
                                                            styles["tag-button"]} htmlFor={tag} >{tag}</label>
                                    </div>
                        })}
                    </div>
                </div>
                {Follow}
            </div>
        </div>
    )
}

export default BlogContainer