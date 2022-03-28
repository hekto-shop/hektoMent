import React from "react";
import styles from "./WishlistItems.module.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Item, } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "../../helpers/format-number";
import { makeStyles } from "@mui/styles";
import { removeFromFavorites } from "../../store/thunk";

import * as icons from "../../assets/icons";

const useStyles = makeStyles({
  image: {
    width: 'auto',
    maxHeight: '150px',
    gridColumn: '1/2',
    margin:'auto'
  },
  cardAction: {
    display: 'grid',
    gridTemplateRows: '200px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
  }
});

const WishlistItems = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  let wishlistItems = useSelector((state)=> state.cartReducer.favorites);
  const currency = useSelector((state) => state.productsReducer.currency);
  console.log(wishlistItems);

  
  const handleRemoveFavorite = (product) => {
    dispatch(removeFromFavorites(product));
  };

  const items = wishlistItems.map((item) => 
    <Card key={item.productCode} className={styles["card"]} >
      <CardActionArea className={classes.cardAction}>
        <div className={styles["image-remove"]}>
          <CardMedia
            component="img"
            image={item.productImage}
            className={classes.image}
          />
          <span onClick={() => handleRemoveFavorite(item)}>
            <img src={icons.deleteIcon} alt="remove" />
          </span>
        </div>
        <CardContent className={styles["card-description"]}>
          <h3 className={styles["card-description-title"]}>{item.name}</h3>
          <h3 className={styles["card-description-code"]} >Code - Y523201</h3>
          <h3 className={styles["card-description-price"]} >
              {formatCurrency(item.price, currency)}
          </h3>
        </CardContent>
        <Button onClick={() => {history.push(`/product/${item.productCode}`)}} variant="contained">View Details</Button>
      </CardActionArea> 
    </Card>
  )
  return (
    <div className={styles["container"]}>
      {items}
    </div>
  );
};

export default WishlistItems;

