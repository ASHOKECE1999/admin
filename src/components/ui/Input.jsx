import { cn } from "@/lib/utils";
import React from "react";

const Input = ({ className, type, children, onChange, ...props }) => {
  return (
    <input
      type={type}
      className={cn("custom-input", className)}
      onChange={onChange}
      {...props}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
