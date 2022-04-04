import React from "react";
import styles from "./WishlistItems.module.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Card, CardContent, CardMedia, } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { formatCurrency } from "../../helpers/format-number";
import { makeStyles } from "@mui/styles";
import { removeFromFavorites } from "../../store/thunk";
import { useTheme } from '@mui/material/styles';
import * as icons from "../../assets/icons";

const useStyles = makeStyles({
  cardAction: {
    display: 'grid',
    gridTemplateRows: '200px',
    gridTemplateColumns: 'repeat(5, 1fr)',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: (theme) => theme.palette.background.wishlist
    },
    ['@media (max-width:600px)']: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    }
  }
});

const WishlistItems = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const dispatch = useDispatch();
  let wishlistItems = useSelector((state)=> state.cartReducer.favorites);
  const currency = useSelector((state) => state.productsReducer.currency);

  const handleRemoveFavorite = (product) => {
    dispatch(removeFromFavorites(product));
  };

  const items = wishlistItems.map((item) => 
    <Card key={item.productCode} className={styles["card"]} >
      <div className={classes.cardAction}>
        <div className={styles["image-container"]}>
          <CardMedia
            component="img"
            image={item.productImage}
            className={styles["card-image"]}
          />
          <span onClick={() => handleRemoveFavorite(item)}>
            <img src={icons.deleteIcon} alt="remove" className={styles["remove-button"]} />
          </span>
        </div>
        <CardContent className={styles["card-description"]}>
          <h3 className={styles["card-description-title"]}> {item.name}</h3>
          <h3 className={styles["card-description-stock"]} > {item.quantity? 'In Stock': 'Out Of Stock'} </h3>
          <h3 className={styles["card-description-price"]} > {formatCurrency(item.price, currency)} </h3>
        </CardContent>
        <Button 
          className={styles["card-button"]} 
          onClick={() => {history.push(`/product/${item.productCode}`)}} 
          variant="contained">
            View Details
        </Button>
      </div> 
    </Card>
  )
  
  return (
    <div className={styles["container"]}>
      {items.length? items: <h1 className={styles["empty"]}>Wishlist is empty. Please go to Shop page and add items to your wishlist</h1>}
    </div>
  );
};

export default WishlistItems;

