import Image from "next/image";
import img from "../../assets/img/img.jpg";
import { CreateNavbar } from "../navbar/navbar";

export const CreateHeader = () => {
  return (
    <div className="h-[675px] w-full">
      <CreateNavbar />
      <Image
        src={img}
        alt="background"
        className="h-[675px] object-cover"
      ></Image>
      <div className="relative w-[450px] h-[90px] top-[-58%] left-[40%] text-[#efc2b3] font-bold text-[2.5rem] text-center tracking-wider leading-[2.8rem]">
        A CONSOLE FOR EVERY WORKFLOW
      </div>
    </div>
  );
};
