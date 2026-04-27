import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <h1>Only For Logon</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
