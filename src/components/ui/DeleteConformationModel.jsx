import React from "react";
import { CloseIcon, DeleteIcon } from "../icon";
import Button from "./Button";

const DeleteConformationModel = ({ isOpen, onCancel, handleConform }) => {
  if (!isOpen) return null;
  const closeModel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0  z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50 "
        onClick={closeModel}
      />
      <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
        <div className="relative  text-center bg-white rounded-lg shadow-lg p-5">
          <button
            type="button"
            className="close-icon-button"
            onClick={closeModel}
          >
            <CloseIcon />
          </button>

          <div className="flex items-center justify-center text-red-500">
            <DeleteIcon className="h-16 w-16" />
          </div>
          <p className="my-6 font-semibold text-xl">
            Are you sure you want to delete ?
          </p>
          <div className="flex justify-end items-center space-x-4">
            <Button
              type="button"
              onClick={closeModel}
              className="bg-transparent text-black border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleConform}
              //   className="bg-transparent text-black border border-gray-300 hover:bg-gray-100"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConformationModel;
