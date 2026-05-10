import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
};

export default AuthLayout;
