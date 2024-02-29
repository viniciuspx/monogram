import { FC } from "react";

interface props {
  children?: React.ReactNode;
}

export const CreateCustom: FC<props> = ({ children }) => {
  return (
    <div className="w-full bg-[#f0efed] flex flex-row flex-wrap">
      <div className="w-[70%] mx-auto flex flex-row flex-wrap justify-center">{children}</div>
    </div>
  );
};
