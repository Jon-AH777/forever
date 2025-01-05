"use client";

import { assets } from "@/assets/frontend_assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useShop from "../hooks/useShop";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, showSearch } = useShop();

  console.log(showSearch, "search-navbar");

  const navItems = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link href="/">
        <Image src={assets.logo} className="w-36" alt="Logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
            className="flex flex-col items-center gap-1"
          >
            <p>{item}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </Link>
        ))}
      </ul>
      <div className="flex items-center gap-6">
        <Image
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <Link href="/login">
            <Image
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="profile"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              {["My Profile", "Orders", "Logout"].map((item) => (
                <p key={item} className="cursor-pointer hover:text-black">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/cart" className="relative">
          <Image src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <Image
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <Image
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="Menu"
            />
            <p>Back</p>
          </div>
          {navItems.map((item) => (
            <Link
              href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="py-2 pl-6 border"
              key={item}
              onClick={() => setVisible(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
