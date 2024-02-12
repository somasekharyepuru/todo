import { DatePicker } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import { MSProps } from "../interfaces";
const { RangePicker } = DatePicker;
export const MSDateRangePicker = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<RangePickerProps>) => {
  return <RangePicker className={className} {...other} />;
};
