import { Input } from "antd";
import type { PasswordProps } from "antd/es/input";
import { MSProps } from "../interfaces";
const { Password } = Input;
export const MSInputPassword = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<PasswordProps>) => {
  return <Password className={className} {...other} />;
};
