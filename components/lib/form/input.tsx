import { Input, InputProps } from "antd";
import { MSProps } from "../interfaces";

export const MSInput = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<InputProps>) => {
  return <Input className={className} {...other} />;
};
