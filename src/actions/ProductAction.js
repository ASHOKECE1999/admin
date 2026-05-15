"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
// improt writeFile

const UPLOAD_DIR = path.resolve("public/uploads");

export const addProduct = async (formData) => {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    smallSize: parseInt(formData.get("smallSize")),
    mediumSize: parseInt(formData.get("mediumSize")),
    largeSize: parseInt(formData.get("largeSize")),
    mrp: parseFloat(formData.get("mrp")),
    sellingPrice: parseFloat(formData.get("sellPrice")),
    isActive: formData.get("isActive"),
    productTypeId: parseInt(formData.get("productType")),
  };

  const productType = await db.productType.findUnique({
    where: {
      id: parseInt(data.productTypeId),
    },
  });

  if (!productType) {
    redirect("/products/add?errorMessage=Invalid Product Type");
  }

  const file = formData.get("image");
  let imagePath = "";
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // Save the file to the upload directory
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR);
    }
    const fileName = Date.now() + path.extname(file.name);
    imagePath = `/uploads/${fileName}`;
    const fullPath = path.join(process.cwd(), "public", imagePath);
    await writeFile(fullPath, buffer);
  }
  const totalStock = data.smallSize + data.mediumSize + data.largeSize;

  await db.product.create({
    data: {
      name: data.name,
      description: data.description,
      sellingPrice: data.sellingPrice,
      mrp: data.mrp,
      image: imagePath,
      currentStock: totalStock,
      isActive: data.isActive === "on",
      smallSize: data.smallSize,
      mediumSize: data.mediumSize,
      largeSize: data.largeSize,
      productType: {
        connect: {
          id: productType.id,
        },
      },
    },
  });

  revalidatePath("/products", "page");
  redirect("/products");
};

export const getAllProducts = async () => {
  const products = await db.product.findMany({
    include: {
      productType: true,
    },
  });
  return products;
};

export const deleteProduct = async (productId) => {
  await db.product.delete({
    where: { id: parseInt(productId) },
  });
  revalidatePath("/products", "page");
};

export const getProductDetailsById = async (productId) => {
  const product = await db.product.findUnique({
    where: { id: parseInt(productId) },
    include: {
      productType: true,
    },
  });
  return product;
};
