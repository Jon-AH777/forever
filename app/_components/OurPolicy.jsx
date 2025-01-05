import { assets } from "@/assets/frontend_assets/assets";
import Image from "next/image";
import React from "react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <Image
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5"
          alt="Logo"
        />
        <p className="font-semibold">Easey Exhange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <Image
          src={assets.quality_icon}
          className="w-12 m-auto mb-5"
          alt="logo"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <Image
          src={assets.support_img}
          className="w-12 m-auto mb-5"
          alt="logo"
        />
        <p className="font-semibold ">Best Customer Support</p>
        <p className="text-gray-400">We proive 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
