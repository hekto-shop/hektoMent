import React from "react";
import styles from "./WishlistItems.module.scss";

import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
const WishlistItems = (props) => {
  let wishlistArray = props.wishlistArray;
  console.log(wishlistArray);
  return (
    <Card>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"/>
            Wishlist
        </CardActionArea>
    </Card>
  );
};

export default WishlistItems;
