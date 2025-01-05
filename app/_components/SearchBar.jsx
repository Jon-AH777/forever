"use client";

import { assets } from "@/assets/frontend_assets/assets";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useShop from "../hooks/useShop";

const SearchBar = () => {
  const { setSearch, setShowSearch, showSearch, search } = useShop();
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  console.log(showSearch, "search-bar");

  useEffect(() => {
    if (pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pathname]);


  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search your products"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Image src={assets.search_icon} className="w-4" alt="Search" />
      </div>
      <Image
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
