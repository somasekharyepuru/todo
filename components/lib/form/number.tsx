import { InputNumber, InputNumberProps } from "antd";
import { MSProps } from "../interfaces";

export const MSInputNumber = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<InputNumberProps>) => {
  return <InputNumber className={className} {...other} />;
};
