"use client";
import React, { useState } from "react";
import useShop from "../hooks/useShop";
import CartTotal from "../_components/CartTotal";
import Title from "../_components/Title";
import Image from "next/image";
import { assets } from "@/assets/frontend_assets/assets";
import Link from "next/link";

const placeOrder = () => {
  const [method, setMethod] = useState("cod");
  const { pathname } = useShop();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <Title text1="DELIVERY" text2=" INFORMATION" />
        <div className="flex gap-3">
          {["First Name", "Last Name"].map((placeholder) => (
            <input
              type="text"
              placeholder={placeholder}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              key={placeholder}
            />
          ))}
        </div>
        {[
          "Email address",
          "Street",
          "City",
          "State",
          "Zipcode",
          "Country",
          "Phone number",
        ].map((placeholder) => (
          <input
            type={placeholder.includes("number") ? "number" : "text"}
            placeholder={placeholder}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            key={placeholder}
          />
        ))}
      </div>
      {/* Right */}
      <div className="mt-8">
        <CartTotal />
        <Title text1="PAYMENT" text2=" METHOD" />
        {/* Payment method */}
        <div className="flex gap-3 flex-col lg:flex-row">
          {[
            { name: "stripe", logo: assets.stripe_logo },
            { name: "razorpay", logo: assets.razorpay_logo },
            { name: "cod", text: "CASH ON DELIVERY" },
          ].map((methodObj) => (
            <div
              onClick={() => setMethod(methodObj.name)}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              key={methodObj.name}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === methodObj.name ? "bg-green-400" : ""
                }`}
              ></p>
              {methodObj.logo && (
                <Image
                  src={methodObj.logo}
                  className="h-5 mx-4"
                  alt={methodObj.name}
                />
              )}
              {methodObj.text && (
                <p className="text-gray-500 text-sm font-medium mx-4">
                  {methodObj.text}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="w-full text-end mt-8">
          <Link href="/orders">
            <button className="bg-black text-white px-16 py-3 text-sm">
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default placeOrder;
