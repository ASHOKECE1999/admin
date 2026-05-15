import ProductEdit from "@/screens/product/edit";
import React from "react";

const ProductEditPage = async ({ params }) => {
  const { productId } = await params;
  const productData = await getProductDetailsById(productId);
  return <ProductEdit productData={productData} productId={productId} />;
};

export default ProductEditPage;
