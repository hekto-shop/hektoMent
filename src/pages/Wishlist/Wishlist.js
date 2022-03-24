import React from "react";
import PageContainer from "../../containers/PageContainer";
import PageLayout from "../../containers/PageLayout";
import WishlistItems from "../../components/WishlistItems";

const wishlistArray = [{name:'first', price:'10', code:'1'}, {name:'first', price:'10', code:'1'}];

const Wishlist = () => {
  return (
    <PageLayout title="Wishlist">
      <PageContainer>
          <WishlistItems wishlistArray={wishlistArray} />
      </PageContainer>
    </PageLayout>
  );
};

export default Wishlist;
