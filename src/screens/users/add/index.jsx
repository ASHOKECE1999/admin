import { createUser } from "@/actions/UserActions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LabelComponent from "@/components/ui/Label";
import React from "react";

export default async function AddUser({ searchParams }) {
  const params = await searchParams;
  console.log("searchParams", params);
  const { errorMessage } = params;

  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Add User</h1>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={createUser}
      >
        {errorMessage && (
          <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50  w-fit">
            <span className="text-red-500 col-span-2 text-md my-0 font-500">
              {errorMessage}
            </span>
          </div>
        )}
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>User Name</LabelComponent>
          </div>
          <Input
            type="text"
            placeholder="Enter User Name"
            className="custom-input"
            name="userName"
          />
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>User Type</LabelComponent>
          </div>
          <select
            className="custom-input bg-white curser-pointer appearance-none"
            name="userType"
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true}>Password</LabelComponent>
          </div>
          <Input
            type="password"
            placeholder="Enter Password "
            className="custom-input"
            name="password"
          />
        </div>
        <div className="grid gap-2">
          <div className="text-sm lg:text-base h-fit">
            <LabelComponent required={true} className="font-bold">
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
}
