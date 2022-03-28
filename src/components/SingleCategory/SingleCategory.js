import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./SingleCategory.module.scss";

const SingleCategory = ({ category }) => {
  return (
    <Card className={styles["single-category"]}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={category.url} alt="" />
        <CardContent>
          <h2>{category.category}</h2>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/shop?cat=${category.category.replace(/ /g, '+').replace(/&/g, '%26')}`}>Shop Now</Link>
      </CardActions>
    </Card>
  );
};

export default SingleCategory;
