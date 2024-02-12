import Link, { LinkProps } from "next/link";
import { MSProps } from "../interfaces";

export const MSLink = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<LinkProps>) => {
  return (
    <Link className={className} {...other} passHref>
      {children}
    </Link>
  );
};
