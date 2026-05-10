"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const createUser = async (userData) => {
  const salt = await bcrypt.genSaltSync(5);
  const hashedPassword = await bcrypt.hashSync(userData.get("password"), salt);
  const isUserExist = await db.adminUser.findUnique({
    where: {
      userName: userData.get("userName"),
    },
  });
  // console.log("isUserExist", isUserExist);
  if (isUserExist) {
    redirect("/users/add?errorMessage=Username already exists...");
  }
  const data = {
    userName: userData.get("userName"),
    userType: userData.get("userType"),
    password: hashedPassword,
    conformPassword: userData.get("confirmPassword"),
  };
  await db.adminUser.create({
    data: {
      userName: data.userName,
      userType: data.userType,
      password: data.password,
    },
  });
  revalidatePath("/users", "page");
  redirect("/users");
};

export const getAllUsers = async () => {
  const users = await db.adminUser.findMany();
  // console.log("users", users);
  return users;
};

export const deleteUser = async (userId) => {
  // console.log("delete user with id", userId);
  await db.adminUser.delete({
    where: {
      id: parseInt(userId),
    },
  });
  revalidatePath("/users", "page");
  // redirect("/users");
};

export const getUserById = async (userId) => {
  const user = await db.adminUser.findUnique({
    where: {
      id: userId,
    },
  });
  // console.log("user in getUserById", user);
  return user;
};
