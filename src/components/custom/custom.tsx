import { FC } from "react";

interface props {
  text: String;
}

export const CreateCustom: FC<props> = ({ text }) => {
  return <div className="w-full bg-[#f0efed]">{text}</div>;
};
