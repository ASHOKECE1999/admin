"use client";

import { editProductTypeDetails } from "@/actions/productTypeActions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LabelComponent from "@/components/ui/Label";
import React from "react";

const EditProductPage = ({ productName, productDetails }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Edit Product Type</h1>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) =>
          editProductTypeDetails(formData, parseInt(productName))
        }
        // action={(formData) => editUserDetails(formData, userId)}
      >
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Product Type Name</LabelComponent>
          </div>
          <Input
            type="text"
            placeholder="Enter Product Type Name"
            className="custom-input"
            name="name"
            defaultValue={productDetails?.name}
          />
        </div>
        <div className="grid gap-2"> </div>
        <div>
          <Button className="custom-submit-button" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
