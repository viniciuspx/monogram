"use client";

import Image from "next/image";
import { FC, useState } from "react";

import cheese from "@/assets/img/cheese.jpg";

interface props {
  className: String;
  productName: String;
  productPrice: String;
}

export const ProductDisplay: FC<props> = ({
  className,
  productName,
  productPrice,
}) => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(!mouseOver);
  };

  const shopNowButton = () => {
    return (
      <div className="uppercase text-[0.6rem] border-2 border-solid rounded-xl px-2 py-1 bg-[#1a2456] text-white font-bold cursor-pointer">
        shop now
      </div>
    );
  };

  return (
    <div
      className={`m-2 ` + className}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <Image
        src={cheese}
        alt="cheese"
        className="object-cover cursor-pointer"
      ></Image>
      <div className="flex flex-row justify-between mx-2 mt-2">
        <span className="font-bold uppercase tracking-widest text-[#1a2456] mb-1">
          {productName}
        </span>
        <span className="tracking-widest text-[#1a2456]">
          {!mouseOver ? productPrice : shopNowButton()}
        </span>
      </div>
      <span className="text-[0.8rem] text-[#1a2456] mx-2 tracking-wider">
        Cheese is the best
      </span>
    </div>
  );
};
