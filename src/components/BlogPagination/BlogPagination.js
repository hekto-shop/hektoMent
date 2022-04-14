import React from "react";
import classes from "./BlogPagination.module.scss";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const BlogPagination = (props) => {  
    const {currentPage, totalPages, handlePagination } = props;
    const [startPage, setStartPage] = useState(1);
    const [pageArr, setPageArr] = useState( [1,2,3,4]);
    useEffect( () => {   
        let endPage = startPage + 3;
        if(startPage + 3 > totalPages) {
            endPage = totalPages;
        }
        if(currentPage > endPage) {
            setStartPage(currentPage);
        }    
    }, [currentPage])

    useEffect( () => {
        let newPageArr = [];
        pageArr.forEach((elem, index)=> {
            if(startPage + index <= totalPages) {
                newPageArr.push(startPage + index)  
            }
        })
        setPageArr(newPageArr);
    }, [startPage])
    
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