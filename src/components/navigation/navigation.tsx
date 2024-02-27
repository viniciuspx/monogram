import Link from "next/link";
import { SlBag } from "react-icons/sl";

export const CreateNavigation = () => {
  return (
    <div className="my-auto text-[0.8rem] flex flex-row">
      <Link href={"/"} className="m-4 hover:text-[#ff8b68]">
        HOW IT WORKS
      </Link>

      <Link href={"/"} className="m-4 hover:text-[#ff8b68]">
        WORKFLOWS ▼
      </Link>

      <Link href={"/"} className="m-4 hover:text-[#ff8b68]">
        DOWNLOAD
      </Link>

      <Link href={"/"} className="m-4 hover:text-[#ff8b68]">
        BLOG
      </Link>

      <Link href={"/"} className="m-4 hover:text-[#ff8b68]">
        SUPPORT
      </Link>

      <Link href={"/"} className="m-4 font-bold hover:text-[#ff8b68]">
        SHOP
      </Link>

      <Link href={"/"} className="m-4 flex flex-row hover:text-[#ff8b68]">
        <SlBag className="text-[24px]" />
        <span className="ml-2">USD ▼</span>
      </Link>
    </div>
  );
};
