import React from "react";
import classes from "./BlogPagination.module.scss";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BlogPagination = (props) => {  
    const {currentPage, totalPages, handlePagination, blogList } = props;
    const [pageArr, setPageArr] = useState( []);

    useEffect( () => {  
        if(blogList.length !== 0) {
            let start = Math.floor((currentPage - 1) / 4)*4 + 1;
            let end;
            if(start + 3 <= totalPages) {
                end = start + 3; 
            } else {
                end = totalPages;
            }
            let newPageArr = [];
            for(let i = start; i <= end; i++) {
                newPageArr.push(i);
            }
            setPageArr(newPageArr);
        } else {
            setPageArr([])
        }
    }, [currentPage, totalPages, blogList])

    return (
        <div className={classes.pagination}>
            <button
                className={classes.arrow}
                disabled={currentPage === 1}
                onClick={handlePagination}
                value="-1"
            >
               {'<'} Prev
            </button>
            {pageArr.map((elem) => {
                return <button key={elem}  
                        onClick={handlePagination} 
                        className={(currentPage === elem) ? [classes.number, classes.active].join(' ') : classes.number} 
                        value={elem-currentPage}>
                            {elem}
                        </button>
            })}
            <button
                className={classes.arrow}
                disabled={currentPage === totalPages}
                onClick={handlePagination}
                value="1"
                starticon={<ArrowForwardIosIcon />}
            >
                Next {'>'}
            </button>
        </div>)
}

export default BlogPagination