import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LabelComponent from "@/components/ui/Label";
import AddUser from "@/screens/users/add";
import React from "react";

const AddUserPage = ({ searchParams }) => {
  return (
    <>
      <AddUser searchParams={searchParams} />
    </>
  );
};

export default AddUserPage;
