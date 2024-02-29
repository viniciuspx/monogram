import { FC } from "react";

interface props{
    className: String;
}

export const ProductDisplay:FC<props> = ({className}) => {
  return <div className={`border-2 border-black m-2 ` + className}>Produto</div>;
};
