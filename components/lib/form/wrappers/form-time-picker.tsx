import { Form, FormItemProps, TimePickerProps } from "antd";
import { MSProps } from "@/components";
import { MSTimePicker } from "../time-picker";
interface IMSFormTimePickerProps extends FormItemProps {
  timePickerProps?: MSProps<TimePickerProps>;
}
export const MSFormTimePicker = ({
  permissions,
  name,
  timePickerProps,
  className,
  label,
  ...other
}: MSProps<IMSFormTimePickerProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSTimePicker permissions={permissions} {...timePickerProps} />
    </Form.Item>
  );
};
