"use client";
import React, { useState } from "react";
import Input from "./Input";
import { UploadIcon } from "../icon";

const CustomFileInput = ({ name, required }) => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };
  return (
    <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
      <Input
        type="file"
        placeholder="Enter Product Image URL"
        name={name}
        required={required}
        className="sr-only"
        id="fileInput"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileInput"
        className="custom-input px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 flex items-center justify-center gap-x-2"
      >
        <UploadIcon /> Choose File
      </label>
      <span className="ml-2 text-gray-500 truncate">{fileName}</span>
    </div>
  );
};

export default CustomFileInput;
