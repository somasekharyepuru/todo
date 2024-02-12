import { Form } from "antd";
import type { FormListProps } from "antd/es/form";
import { MSPermissionProp } from "@/components";
export const MSFormList = ({
  permissions,
  name,
  children,
  ...other
}: MSPermissionProp<FormListProps>) => {
  return (
    <Form.List name={name} {...other}>
      {children}
    </Form.List>
  );
};
