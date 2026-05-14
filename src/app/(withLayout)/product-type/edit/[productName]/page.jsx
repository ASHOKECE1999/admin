import { getProductDetails } from "@/actions/productTypeActions";

import EditProductPage from "@/screens/product-type/edit";
import React from "react";

const EditProductTypePage = async ({ params }) => {
  const { productName } = await params;
  console.log(productName);
  const productDetails = await getProductDetails(parseInt(productName));
  return (
    <EditProductPage
      productName={productName}
      productDetails={productDetails}
    />
  );
};

export default EditProductTypePage;
