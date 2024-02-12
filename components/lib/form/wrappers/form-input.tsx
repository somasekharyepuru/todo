import { Form, FormItemProps, InputProps } from "antd";
import { MSProps } from "@/components";
import { MSInput } from "../input";
interface IMSFormInputProps extends FormItemProps {
  inputProps?: MSProps<InputProps>;
}
export const MSFormInput = ({
  permissions,
  name,
  inputProps,
  className,
  label,
  ...other
}: MSProps<IMSFormInputProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSInput permissions={permissions} {...inputProps} />
    </Form.Item>
  );
};
