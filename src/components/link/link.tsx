import Link from "next/link";
import { FC } from "react";

interface linkProps {
  path: string;
  className: string;
  children?: React.ReactNode;
}

export const LinkItem: FC<linkProps> = ({ path, className, children }) => {
  return (
    <Link href={path} className={className}>
      {children}
    </Link>
  );
};
