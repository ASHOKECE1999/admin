import { cn } from "@/lib/utils";
import React from "react";

const Input = ({ className, type, ...props }) => {
  return (
    <input className={cn("custom-input", className)} {...props} type={type} />
  );
};

export default Input;
