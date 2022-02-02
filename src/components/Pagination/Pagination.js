import React from "react";
import classes from "./Pagination.module.scss";

const Pagination = (props) => {
  const { currentPage, totalPages, handlePagination } = props;
  return (
    <div className={classes.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={handlePagination}
        value="-1"
      >
        Previous Page
      </button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={handlePagination}
        value="1"
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
