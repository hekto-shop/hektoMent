import React from "react";
import PageContainer from "../../containers/PageContainer";
import PageLayout from "../../containers/PageLayout";
import WishlistItems from "../../components/WishlistItems";

const Wishlist = () => {
  return (
    <PageLayout title="Wishlist">
      <PageContainer>
          <WishlistItems />
      </PageContainer>
    </PageLayout>
  );
};

export default Wishlist;
