import { cn } from "@/lib/utils";
import React from "react";

const Button = ({ className, onClick, children, ...props }) => {
  return (
    <div
      className={cn("custom-submit-button", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
