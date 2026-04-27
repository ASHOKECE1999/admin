import { SideBar } from "@/components/Sidebar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 p-6 my-6 mr-8 border  border-gray-300 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default WithLayout;
