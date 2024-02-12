import { Form, FormItemProps } from "antd";
import { MSProps } from "@/components";
import { MSInputPassword } from "../password";
import type { PasswordProps } from "antd/es/input";
interface IMSFormPasswordProps extends FormItemProps {
  passwordProps?: MSProps<PasswordProps>;
}
export const MSFormPassword = ({
  permissions,
  name,
  passwordProps,
  className,
  label,
  ...other
}: MSProps<IMSFormPasswordProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSInputPassword permissions={permissions} {...passwordProps} />
    </Form.Item>
  );
};
