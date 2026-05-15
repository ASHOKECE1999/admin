"use client";

import { DeleteIcon, EditIcon } from "@/components/icon";
import DeleteConformationModel from "@/components/ui/DeleteConformationModel";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { deleteProduct } from "@/actions/ProductAction";

const ProductManagementPage = ({ products }) => {
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDelete = async (selectedProduct) => {
    await deleteProduct(selectedProduct);
    setIsDeleteModelOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl p-2">Products Management</h1>
        <button>
          <Link href="/products/add" className="custom-primary-btn">
            Add Product
          </Link>
        </button>
      </div>
      <hr className="my-5" />
      <div className="mt-20 max-h-125 overflow-y-auto rounded">
        <table className="custom-table overflow-y-auto max-h-11/12">
          <thead className="sticky top-0 bg-white z-10 border-b-2 border-t-2 border-gray-400 shadow-sm">
            <tr>
              <th>Product</th>

              <th>Product Type</th>
              <th> MRP</th>
              <th>Selling Price</th>
              <th>Current Stock</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll max-h-96 text-gray font-medium text-lg text-center">
            {products.map((product, index) => (
              <tr key={index}>
                <td className="grid grid-cols-[auto_1fr] gap-3">
                  <Image
                    src={product.image || "/placeholder-image.png"}
                    alt="Product Image"
                    width={0}
                    height={0}
                    className="w-20 h-20 bg-amber-400 text-black"
                    size="100vw"
                  />
                  <div className="flex flex-col items-start self-center">
                    <span>{product.name}</span>
                    <span className="text-sm text-gray-500 truncate max-w-3/4">
                      {product.description}
                    </span>
                  </div>
                </td>

                <td className=" text-center">{product.productType?.name}</td>

                <td className=" text-center">{product.mrp}</td>
                <td className=" text-center">{product.sellingPrice}</td>
                <td className=" text-center">{product.currentStock}</td>
                <td
                  className={cn(
                    `text-center ${product.isActive ? "text-green-600" : "text-red-600"} font-semibold`,
                  )}
                >
                  {product.isActive ? "Active" : "Inactive"}
                </td>
                <td>
                  <div className="flex">
                    <Link
                      href={`/products/edit/1`}
                      className="px-3 custom-primary-btn "
                    >
                      <EditIcon />
                    </Link>
                    <button
                      className="px-3 custom-danger-btn "
                      onClick={() => {
                        setIsDeleteModelOpen(true);
                        setSelectedProduct(product);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isDeleteModelOpen && (
          <DeleteConformationModel
            isOpen={isDeleteModelOpen}
            onCancel={() => setIsDeleteModelOpen(false)}
            handleConform={() => handleDelete(selectedProduct.id)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductManagementPage;
