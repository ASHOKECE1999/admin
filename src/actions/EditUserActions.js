"use server";

import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const editUserDetailsAction = async (formData, userId) => {
  const salt = await bcrypt.genSaltSync(5);
  const hashedPassword = await bcrypt.hashSync(formData.get("password"), salt);
  const data = {
    userName: formData.get("userName"),
    userType: formData.get("userType"),
    password: hashedPassword,
  };

  await db.adminUser.update({
    where: {
      id: parseInt(userId),
    },
    data: data,
  });

  revalidatePath("/users", "page");
  redirect("/users");
};
