import { SlArrowDown } from "react-icons/sl";

export const CreateHeader = () => {
  return (
    <div className="h-[675px] w-full bg-img flex">
      <div className="card-overlay w-full flex flex-col">
        <div className="m-auto flex flex-col">
          <div className="w-[450px] h-[90px] text-[#efc2b3] font-bold text-[2.5rem] text-center tracking-wider leading-[2.8rem] mx-auto">
            A CONSOLE FOR EVERY WORKFLOW
          </div>
          <span className="w-[450px] h-[30px] mx-auto text-[#efc2b3] text-center tracking-wider mt-[15px] text-[1.1rem]">
            Discover the perfect console for yours.
          </span>
        </div>
        <div className="text-white text-[36px] mx-auto mb-[30px] hover:animate-pulse cursor-pointer">
          <SlArrowDown />
        </div>
      </div>
    </div>
  );
};
