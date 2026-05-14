import AddProductType from "@/screens/product-type/add";
import React from "react";

const AddProductTypePage = ({ searchParams }) => {
  return (
    <div>
      <AddProductType searchParams={searchParams} />
    </div>
  );
};

export default AddProductTypePage;
