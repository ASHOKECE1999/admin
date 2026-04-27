import { cn } from "@/lib/utils";
import React from "react";

const LabelComponent = ({ className, required, children }) => {
  return (
    <div>
      <div className={cn("text-sm lg:text-base h-fit", className)}>
        <label>{children}</label>
        {required && <span className="text-red-500">*</span>}
      </div>
    </div>
  );
};

export default LabelComponent;
