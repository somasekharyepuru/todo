import { Form, FormItemProps, SwitchProps } from "antd";
import { MSProps } from "@/components";
import { MSSwitch } from "../switch";
interface IMSFormSwitchProps extends FormItemProps {
  switchProps?: MSProps<SwitchProps>;
}
export const MSFormSwitch = ({
  permissions,
  name,
  switchProps,
  className,
  valuePropName = "checked",
  label,
  ...other
}: MSProps<IMSFormSwitchProps>) => {
  return (
    <Form.Item
      name={name}
      label={label}
      className={className}
      valuePropName={valuePropName}
      {...other}
    >
      <MSSwitch permissions={permissions} {...switchProps} />
    </Form.Item>
  );
};
