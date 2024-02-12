import { Form, FormItemProps } from "antd";
import { MSProps } from "@/components";
import { IMSSelectProps, MSSelect } from "../select";
interface IMSFormSelectProps extends FormItemProps {
  selectProps?: MSProps<IMSSelectProps>;
}
export const MSFormSelect = ({
  permissions,
  name,
  selectProps,
  className,
  label,
  ...other
}: MSProps<IMSFormSelectProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSSelect permissions={permissions} {...selectProps} />
    </Form.Item>
  );
};
