import { getAllProductTypes } from "@/actions/productTypeActions";
import ProductTypes from "@/screens/product-type";
import React from "react";

const ProductTypeManagement = async () => {
  const allProductTypes = await getAllProductTypes();
  return (
    <div>
      <ProductTypes allProductTypes={allProductTypes} />
    </div>
  );
};

export default ProductTypeManagement;
