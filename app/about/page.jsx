import React from "react";
import Title from "../_components/Title";
import Image from "next/image";
import { assets } from "@/assets/frontend_assets/assets";
import NewsletterBox from "../_components/NewsletterBox";

const page = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <Image
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt="about"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a passionate team dedicated to providing the best services to
            our customers. Our journey started with a simple idea and has grown
            into a thriving community.
          </p>
          <p>
            Our team is composed of skilled professionals who are always ready
            to tackle new challenges and deliver exceptional results. We believe
            in continuous learning and growth.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower our clients with innovative solutions that
            drive success and make a positive impact on the world. We strive to
            exceed expectations and deliver value in everything we do.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We ensure that our products and services meet the highest standards
            of quality and reliability. Customer satisfaction is our top
            priority.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We offer user-friendly solutions designed to save you time and
            effort. Our services are easily accessible and tailored to meet your
            needs.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is always available to assist you with
            any inquiries or issues you may have. We believe in building
            long-lasting relationships with our clients.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default page;
