import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";

import styles from "./SingleCategory.module.scss";

const SingleCategory = ({ category }) => {
  const history = useHistory();

  const cardClickHandler = () => {
    history.push(`/shop?cat=${category.category.replace(/ /g, '+').replace(/&/g, '%26')}`)
  }

  return (
    <Card className={styles["single-category"]} onClick={cardClickHandler}>
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
