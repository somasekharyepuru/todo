import { Form, FormItemProps } from "antd";
import { MSProps } from "@/components";
import { MSDateRangePicker } from "../range-picker";
import type { RangePickerProps } from "antd/es/date-picker";
interface IMSFormDateRangePickerProps extends FormItemProps {
  dateRangePickerProps?: MSProps<RangePickerProps>;
}
export const MSFormDateRangePicker = ({
  permissions,
  name,
  dateRangePickerProps,
  className,
  label,
  ...other
}: MSProps<IMSFormDateRangePickerProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSDateRangePicker permissions={permissions} {...dateRangePickerProps} />
    </Form.Item>
  );
};
