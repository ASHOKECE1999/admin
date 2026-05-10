"use client";

import { editUserDetailsAction } from "@/actions/EditUserActions";
import { getUserById } from "@/actions/UserActions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LabelComponent from "@/components/ui/Label";
import React from "react";

const EditUserPage = async ({ params }) => {
  console.log("params in edit page", params);
  const userId = parseInt(params.userId);
  console.log(userId);
  const userData = await getUserById(userId);

  // console.log("searchParams in edit page", searchParams.userId);
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Edit User</h1>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={(formData) => editUserDetailsAction(formData, userId)}
      >
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>User Name</LabelComponent>
          </div>
          <Input
            type="text"
            placeholder="Enter User Name"
            className="custom-input"
            name="userName"
            defaultValue={userData.userName}
          />
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>User Type</LabelComponent>
          </div>
          <select
            className="custom-input bg-white curser-pointer appearance-none"
            name="userType"
            defaultValue={userData.userType}
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent>Reset Password</LabelComponent>
          </div>
          <Input
            type="password"
            placeholder="Enter Password "
            className="custom-input"
            name="password"
            defaultValue=""
          />
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent className="font-bold">
              Confirm Password
            </LabelComponent>
          </div>
          <Input
            type="password"
            placeholder="Enter Confirm Password"
            name="confirmPassword"
            className="custom-input"
          />
        </div>
        <div>
          <Button className="custom-submit-button" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditUserPage;
