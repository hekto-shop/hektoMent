import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "../../contexts/auth-context";
import { addReview } from "../../store/thunk";
import classes from "./MoreInfo.module.scss";
import PageContainer from "../../containers/PageContainer";

import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MoreInfo = (props) => {
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const { user } = useSession();

  const product = props.product;
  const theme = useTheme();
  const backgroundColor = { backgroundColor: theme.palette.background.main };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      addReview(product, {
        author: user.displayName,
        date: new Date(),
        text: review,
      })
    );

    setReview("");
  };
  const renderReviews = () => {
    if (!product.reviews || !product?.reviews?.length === 0)
      return <p>No reviews yet</p>;
    return product.reviews.map((rev) => {
      let dateObj;
      if (rev.date?.at) {
        dateObj = new Date(rev.date.seconds * 1000);
      } else {
        dateObj = rev.date;
      }

      const dateString = Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(dateObj);
      return (
        <div className={classes.review}>
          <h3 className={classes.author}>{rev.author}</h3>
          <h6 className={classes.date}>{dateString}</h6>
          <p className={classes.text}>{rev.text}</p>
        </div>
      );
    });
  };

  return (
    <section className={classes.section} style={backgroundColor}>
      <PageContainer>
        <h2 className={classes.reviewtitle}>Reviews</h2>
        <div className={classes.reviews}>{renderReviews()}</div>
        <h3 className={classes["add-review-title"]}>Add your review</h3>
        <form className={classes.form} onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setReview(e.target.value)}
            className={classes.textarea}
            rows="4"
            value={review}
          />
          <Button className={classes.sendbtn} type="submit">
            <SendIcon />
          </Button>
        </form>
      </PageContainer>
    </section>
  );
};

export default MoreInfo;
