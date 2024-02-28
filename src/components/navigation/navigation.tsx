"use client";
import { SlBag } from "react-icons/sl";
import { LinkItem } from "../link/link";

export const CreateNavigation = () => {
  return (
    <div className="my-auto text-[0.8rem] flex flex-row">
      <LinkItem path={"/"} className={"m-4 hover:text-[#ff8b68]"}>
        HOW IT WORKS
      </LinkItem>

      <LinkItem path={"/"} className={"m-4 hover:text-[#ff8b68]"}>
        WORKFLOWS ▼
      </LinkItem>

      <LinkItem path={"/"} className={"m-4 hover:text-[#ff8b68]"}>
        DOWNLOAD
      </LinkItem>

      <LinkItem path={"/"} className={"m-4 hover:text-[#ff8b68]"}>
        BLOG
      </LinkItem>

      <LinkItem path={"/"} className={"m-4 hover:text-[#ff8b68]"}>
        SUPPORT
      </LinkItem>

      <LinkItem path={"/"} className={"m-4 hover:text-[#ff8b68] font-bold"}>
        SHOP
      </LinkItem>

      <LinkItem path={"/"} className={"m-4 flex flex-row hover:text-[#ff8b68]"}>
        <SlBag className="text-[24px]" />
        <span className="ml-2">USD ▼</span>
      </LinkItem>
    </div>
  );
};
