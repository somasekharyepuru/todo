import type { TimeRangePickerProps } from "antd";
import { TimePicker } from "antd";
import { MSProps } from "../interfaces";

export const MSTimeRangePicker = ({
  className,
  permissions,
  children,
  format = "HH:mm",
  changeOnBlur = true,
  ...other
}: MSProps<TimeRangePickerProps>) => {
  return (
    <TimePicker.RangePicker
      changeOnBlur={changeOnBlur}
      className={className}
      format={format}
      {...other}
    />
  );
};
