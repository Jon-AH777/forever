import Image from "next/image";
import Link from "next/link";
import React from "react";
import useShop from "../hooks/useShop";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useShop();

  return (
    <Link href={`/product/${id}`}>
      <div className="overflow-hidden">
        <Image
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt="product"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
