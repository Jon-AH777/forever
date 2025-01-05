"use client";
import React from "react";
import useShop from "../hooks/useShop";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useShop();
  const bestSeller = products.filter((item) => item.bestseller).slice(0, 9);
  return (
    <div className="my-10">
      <div className="text-center text text-3xl py-8">
        <Title text1={"BEST"} text2={" SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-500">
          Check out our top-selling products that our customers love! These
          bestsellers are highly related and
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
