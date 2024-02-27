import { SlGrid } from "react-icons/sl";
import { CreateNavigation } from "../navigation/navigation";

export const CreateNavbar = () => {
  return (
    <div className="h-[82px] w-full fixed p-[15px]">
      <div className="bg-[#1a2456] h-full text-[#efc2b3] font-light flex flex-row justify-between tracking-widest">
        <div className="w-[170px] my-auto m-2 flex flex-row justify-around hover:text-[#ff8b68] cursor-pointer">
          <SlGrid className="text-[32px]" />
          <span className="my-auto ml-2 font-bold text-[0.9rem]">MONOGRAM</span>
        </div>
        <CreateNavigation />
      </div>
    </div>
  );
};
