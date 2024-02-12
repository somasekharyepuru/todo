import { Form, FormItemProps, DatePickerProps } from "antd";
import { MSProps } from "@/components";
import { MSDatePicker } from "../date-picker";
interface IMSFormDatePickerProps extends FormItemProps {
  datePickerProps?: MSProps<DatePickerProps>;
}
export const MSFormDatePicker = ({
  permissions,
  name,
  datePickerProps,
  className,
  label,
  ...other
}: MSProps<IMSFormDatePickerProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSDatePicker permissions={permissions} {...datePickerProps} />
    </Form.Item>
  );
};
