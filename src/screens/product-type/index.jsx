"use client";

import { useState } from "react";
import { DeleteIcon, EditIcon } from "@/components/icon";
import DeleteConformationModel from "@/components/ui/DeleteConformationModel";
import Link from "next/link";
import React from "react";
import {
  deleteProductType,
  getAllProductTypes,
} from "@/actions/productTypeActions";

const ProductTypes = ({ allProductTypes }) => {
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const productTypes = allProductTypes;

  const handleDelete = (id) => {
    deleteProductType(id);
    // Implement delete logic here, e.g., make an API call to delete the product type
    console.log(`Deleting product type with id: ${id}`);
    setIsDeleteModelOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl p-2">Product Type Management</h1>
        <button>
          <Link href="/product-type/add" className="custom-primary-btn">
            Add Product Type
          </Link>
        </button>
      </div>
      <hr className="my-5" />
      <div className="mt-20 max-h-125 overflow-y-auto rounded">
        <table className="custom-table overflow-y-auto max-h-11/12">
          <thead className="sticky top-0 bg-white z-10 border-b-2 border-t-2 border-gray-400 shadow-sm">
            <tr>
              <th>Sr.No</th>
              <th>Product Type Name</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll max-h-96">
            {productTypes.map((productType, index) => (
              <tr key={productType.id} className="px-9 py-4 m-auto ">
                <td className=" text-center">{index + 1}</td>
                <td className=" text-center">{productType.name}</td>
                <td className=" flex justify-center">
                  <Link
                    href={`/product-type/edit/${productType.id}`}
                    className="px-3 custom-primary-btn "
                  >
                    <EditIcon />
                  </Link>
                  <button
                    className="px-3 custom-danger-btn "
                    onClick={() => {
                      setIsDeleteModelOpen(true);
                      setSelectedUserId(productType.id);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isDeleteModelOpen && (
          <DeleteConformationModel
            isOpen={isDeleteModelOpen}
            onCancel={() => setIsDeleteModelOpen(false)}
            handleConform={() => handleDelete(selectedUserId)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductTypes;
