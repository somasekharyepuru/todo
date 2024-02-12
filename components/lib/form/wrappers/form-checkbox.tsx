import { Form, FormItemProps } from "antd";
import { MSProps } from "@/components";
import { IMSCheckBoxProps, MSCheckBox } from "../checkbox";
interface IMSFormCheckBoxProps extends FormItemProps {
  checkBoxProps?: IMSCheckBoxProps;
}
export const MSFormCheckBox = ({
  permissions,
  name,
  valuePropName = "checked",
  checkBoxProps,
  className,
  children,
  ...other
}: MSProps<IMSFormCheckBoxProps>) => {
  return (
    <Form.Item
      name={name}
      valuePropName={valuePropName}
      className={className}
      {...other}
    >
      <MSCheckBox permissions={permissions} {...checkBoxProps}>
        {children}
      </MSCheckBox>
    </Form.Item>
  );
};
