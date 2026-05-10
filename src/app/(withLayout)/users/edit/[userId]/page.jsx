import { findUniqueUserDetails } from "@/actions/UserActions";
import EditUserPage from "@/screens/users/edit";
import React from "react";

const EditUser = async ({ params }) => {
  const { userId } = await params;
  const userData = await findUniqueUserDetails(parseInt(userId));
  return <EditUserPage userId={userId} userData={userData} />;
};

export default EditUser;
