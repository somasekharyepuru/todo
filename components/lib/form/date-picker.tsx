import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { MSProps } from "../interfaces";

export const MSDatePicker = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<DatePickerProps>) => {
  return <DatePicker className={className} {...other} />;
};
