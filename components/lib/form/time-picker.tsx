import type { TimePickerProps } from "antd";
import { TimePicker } from "antd";
import { MSProps } from "../interfaces";

export const MSTimePicker = ({
  className,
  permissions,
  children,
  format = "HH:mm",
  changeOnBlur = true,
  ...other
}: MSProps<TimePickerProps>) => {
  return (
    <TimePicker
      changeOnBlur={changeOnBlur}
      className={className}
      format={format}
      {...other}
    />
  );
};
