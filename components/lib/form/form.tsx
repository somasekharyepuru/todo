import { Form, FormProps } from "antd";
import { MSProps } from "../interfaces";

export const MSForm = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<FormProps>) => {
  return (
    <Form className={className} {...other}>
      {children}
    </Form>
  );
};
