import { Input } from "antd";
import type { TextAreaProps } from "antd/es/input";
import { MSProps } from "../interfaces";
const { TextArea } = Input;
export const MSTextArea = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<TextAreaProps>) => {
  return <TextArea className={className} {...other} />;
};
