import { getAllUsers } from "@/actions/UserActions";
import UsersScreen from "@/screens/users";
import Link from "next/link";
import React from "react";

const UsersPage = async () => {
  const allUsers = await getAllUsers();
  // console.log("allUsers", allUsers);
  return (
    <>
      <UsersScreen users={allUsers} />
    </>
  );
};

export default UsersPage;
