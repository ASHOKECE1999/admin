import { cn } from "@/lib/utils";
import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={cn("custom-submit-button", className)}
      // onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
