import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HomeIcon, UserIcon, SwatchIcon, ShoppingBagIcon } from "../icon";

export const SideBar = () => {
  const menuItem = [
    {
      text: "Dashboard",
      url: "/",
      icon: <HomeIcon />,
    },
    {
      text: "Users",
      url: "/users",
      icon: <UserIcon />,
    },
    {
      text: "Product Type",
      url: "/product-type",
      icon: <SwatchIcon />,
    },
    {
      text: "Products",
      url: "/products",
      icon: <ShoppingBagIcon />,
    },
  ];
  return (
    <div className="sidebar-main">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">eStore</h1>
      </div>
      <ul className="mx-auto text-lg flex flex-col">
        {menuItem.map((item, key) => (
          <li key={key}>
            <Link href={item.url}>
              <div className="sidebar-list-item">
                <span className="mx-3">{item.icon}</span>
                {item.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidebar-usercard">
        <div className="flex flex-row m-5 mb-8">
          <Image
            height={50}
            width={50}
            alt="user Avatar"
            src="/user.png"
            loading="eager"
            radius="sm"
            className="border-gray-600 rounded-full border-2 p-1"
          />
          <div className="m-auto text-lg">Ashok</div>
        </div>
      </div>
    </div>
  );
};
