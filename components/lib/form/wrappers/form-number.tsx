import { Form, FormItemProps, InputNumberProps } from "antd";
import { MSProps } from "@/components";
import { MSInputNumber } from "../number";
interface IMSFormInputNumberProps extends FormItemProps {
  inputNumberProps?: MSProps<InputNumberProps>;
}
export const MSFormInputNumber = ({
  permissions,
  name,
  inputNumberProps,
  className,
  label,
  ...other
}: MSProps<IMSFormInputNumberProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSInputNumber permissions={permissions} {...inputNumberProps} />
    </Form.Item>
  );
};
