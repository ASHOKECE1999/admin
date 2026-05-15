"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export async function createProductType(formData) {
  const data = {
    name: formData.get("name"),
  };

  const existingProductType = await db.productType.findUnique({
    where: {
      name: data.name,
    },
  });

  if (existingProductType) {
    return redirect(
      "/product-type/add?error=Product type already exists.............",
    );
  }
  await db.productType.create({
    data: {
      name: data.name,
    },
  });
  revalidatePath("/product-type", "page");
  redirect("/product-type");
}

export const getAllProductTypes = async () => {
  return await db.productType.findMany();
};

export const getProductDetails = async (productName) => {
  return await db.productType.findUnique({
    where: {
      id: productName,
    },
  });
};

export const editProductTypeDetails = async (formData, productId) => {
  console.log("formData in action", formData, productId);
  const data = {
    name: formData.get("name"),
  };

  await db.productType.update({
    where: {
      id: productId,
    },
    data: {
      name: data.name,
    },
  });
  revalidatePath("/product-type", "page");
  redirect("/product-type");
};

export const deleteProductType = async (productId) => {
  await db.productType.delete({
    where: {
      id: parseInt(productId),
    },
  });
  revalidatePath("/product-type", "page");
  // redirect("/product-type");
};
