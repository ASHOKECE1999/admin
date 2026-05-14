import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LabelComponent from "@/components/ui/Label";
import React from "react";

const AddProductType = ({ searchParams }) => {
  const { errorMessage } = searchParams;
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Add User</h1>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        // action={createUser}
      >
        {errorMessage && (
          <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50  w-fit">
            <span className="text-red-500 col-span-2 text-md my-0 font-500">
              {errorMessage}
            </span>
          </div>
        )}
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Product Name</LabelComponent>
          </div>
          <Input
            type="text"
            placeholder="Enter Product Name"
            className="custom-input"
            name="productName"
          />
        </div>
        <div className="grid gap-2"> </div>

        <div>
          <Button className="w-52 col-span-2 mt-2" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductType;
