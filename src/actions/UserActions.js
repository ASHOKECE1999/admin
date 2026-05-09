import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const createUser = async (userData) => {
  "use server";
  console.log("ashok");
  console.log("userData", userData);
  const salt = bcrypt.genSaltSync(5);
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
