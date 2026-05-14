"use client";
import { deleteUser } from "@/actions/UserActions";
import { DeleteIcon, EditIcon } from "@/components/icon";
import Link from "next/link";
import React from "react";

const UsersScreen = ({ users }) => {
  const handleDelete = async (userId) => {
    await deleteUser(userId);
  };

  // console.log("users in screen", users);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl p-2">User Management</h1>
        <button>
          <Link href="/users/add" className="custom-primary-btn">
            Add User
          </Link>
        </button>
      </div>
      <hr className="my-5" />
      <div className="mt-20 max-h-125 overflow-y-auto rounded">
        <table className="custom-table overflow-y-auto max-h-11/12">
          <thead className="sticky top-0 bg-white z-10 border-b-2 border-t-2 border-gray-400 shadow-sm">
            <tr>
              <th>Sr.No</th>
              <th>User Name</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll max-h-96">
            {users.map((user, index) => (
              <tr key={user.id} className="px-9 py-4 m-auto ">
                <td className=" text-center">{index + 1}</td>
                <td className=" text-center">{user.userName}</td>
                <td className=" text-center">{user.userType}</td>
                <td className=" flex justify-center">
                  <Link
                    href={`/users/edit/${user.id}`}
                    className="px-3 custom-primary-btn "
                  >
                    <EditIcon />
                  </Link>
                  <button
                    className="px-3 custom-danger-btn "
                    onClick={() => handleDelete(user.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersScreen;
