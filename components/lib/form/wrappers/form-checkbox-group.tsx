import { Form, FormItemProps } from "antd";
import { MSProps } from "@/components";
import { IMSCheckBoxGroupProps, MSCheckBoxGroup } from "../checkbox-group";
interface IMSFormCheckBoxGroupProps extends FormItemProps {
  checkBoxGroupProps?: IMSCheckBoxGroupProps;
}
export const MSFormCheckBoxGroup = ({
  permissions,
  name,
  valuePropName = "checked",
  checkBoxGroupProps,
  className,
  ...other
}: MSProps<IMSFormCheckBoxGroupProps>) => {
  return (
    <Form.Item
      name={name}
      valuePropName={valuePropName}
      className={className}
      {...other}
    >
      <MSCheckBoxGroup
        permissions={permissions}
        {...checkBoxGroupProps}
      ></MSCheckBoxGroup>
    </Form.Item>
  );
};
