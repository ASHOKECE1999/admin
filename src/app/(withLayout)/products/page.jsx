import { getAllProducts } from "@/actions/ProductAction";
import ProductManagementPage from "@/screens/product";
import React from "react";

const ProductManagement = async () => {
  const allProducts = await getAllProducts(); // Fetch all products from the database or API
  // console.log(allProducts);
  return <ProductManagementPage products={allProducts} />;
};

export default ProductManagement;
