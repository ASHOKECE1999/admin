import React from "react";

import AddProductPage from "@/screens/product/add";
import { getAllProductTypes } from "@/actions/productTypeActions";

const AddProduct = async ({ searchParams }) => {
  const productTypes = await getAllProductTypes();
  return (
    <AddProductPage searchParams={searchParams} productTypes={productTypes} />
  );
};

export default AddProduct;
