import React from "react";
import Title from "../_components/Title";
import Image from "next/image";
import { assets } from "@/assets/frontend_assets/assets";
import NewsletterBox from "../_components/NewsletterBox";

const page = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <Image
          src={assets.contact_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Wills Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: sanarung.subba@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-500">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our terms and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default page;
