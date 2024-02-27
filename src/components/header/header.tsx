import Image from "next/image";

import img from "../../assets/img/img.jpg";

export const CreateHeader = () => {
  return (
    <div className="h-[675px] w-full bg-[grey]">
      <Image src={img} alt="background" className="h-full w-full object-cover"></Image>
    </div>
  );
};
