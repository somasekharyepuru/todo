import { Form, FormItemProps, TimeRangePickerProps } from "antd";
import { MSProps, MSTimeRangePicker } from "@/components";
interface IMSFormTimeRangePickerProps extends FormItemProps {
  timeRangePickerProps?: MSProps<TimeRangePickerProps>;
}
export const MSFormTimeRangePicker = ({
  permissions,
  name,
  timeRangePickerProps,
  className,
  label,
  ...other
}: MSProps<IMSFormTimeRangePickerProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSTimeRangePicker permissions={permissions} {...timeRangePickerProps} />
    </Form.Item>
  );
};
