import { assets } from "@/assets/frontend_assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_3fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Image src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            We are commited to excellence and customer satisfaction. Join us on
            our journey to make a difference.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {["Home", "About Us", "Delivery", "Privacy Policy"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {["+977-9843641135", "sanarung.subba@gmail.com"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          @ 2025 Sanarung.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
