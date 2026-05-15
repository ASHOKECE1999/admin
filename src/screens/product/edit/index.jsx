import Button from "@/components/ui/Button";
import CustomFileInput from "@/components/ui/CustomFileInput";
import Input from "@/components/ui/Input";
import LabelComponent from "@/components/ui/Label";
import Switch from "@/components/ui/Switch";
import React from "react";

const ProductEdit = ({ productData, productId }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Add Product</h1>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={addProduct}
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
            name="name"
            defaultValue={productData?.name || ""}
          />
        </div>

        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Product Type</LabelComponent>
          </div>
          <select
            className="custom-input bg-white curser-pointer appearance-none"
            name="productType"
            defaultValue={productData?.productType?.id || ""}
          >
            <option value="">Select Product Category</option>
            {productTypes?.map((productType) => (
              <option key={productType.id} value={productType.id}>
                {productType.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true} className="font-bold">
              MRP
            </LabelComponent>
          </div>
          <Input
            type="number"
            placeholder="Enter MRP"
            name="mrp"
            className="custom-input"
            defaultValue={productData?.mrp || ""}
          />
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Selling Price</LabelComponent>
          </div>
          <Input
            type="number"
            placeholder="Enter Selling Price"
            className="custom-input"
            name="sellPrice"
            defaultValue={productData?.sellPrice || ""}
          />
        </div>

        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Product Image</LabelComponent>
          </div>
          <CustomFileInput name="image" required={true} />
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Stock of Small Size</LabelComponent>
          </div>
          <Input
            type="number"
            placeholder="Enter Stock of Small Size"
            className="custom-input"
            name="smallSize"
          />
        </div>

        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>
              Stock of Medium Size
            </LabelComponent>
          </div>
          <Input
            type="number"
            placeholder="Enter Stock of Medium Size"
            className="custom-input"
            name="mediumSize"
          />
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Stock of Large Size</LabelComponent>
          </div>
          <Input
            type="number"
            placeholder="Enter Stock of Large Size"
            className="custom-input"
            name="largeSize"
          />
        </div>

        <div className="grid gap-2">
          <LabelComponent required={true} className="font-bold">
            Product Status
          </LabelComponent>
          <Switch name="isActive" defaultChecked={productData?.isActive} />
        </div>
        <div className="grid gap-2"></div>
        <div className="grid gap-2 col-span-2">
          <LabelComponent required={true}>Product Description</LabelComponent>
          <textarea
            placeholder="Enter Product Description"
            className="custom-input h-auto"
            name="description"
            rows={5}
          />
        </div>
        <div className="grid gap-2 col-span-2"></div>
        <div>
          <Button className="custom-submit-button" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
