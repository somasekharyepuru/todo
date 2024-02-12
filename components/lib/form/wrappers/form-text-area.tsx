import { Form, FormItemProps } from "antd";
import { MSProps } from "@/components";
import { MSTextArea } from "../text-area";
import type { TextAreaProps } from "antd/es/input";
interface IMSFormTextAreaProps extends FormItemProps {
  textAreaProps?: MSProps<TextAreaProps>;
}
export const MSFormTextArea = ({
  permissions,
  name,
  textAreaProps,
  className,
  label,
  ...other
}: MSProps<IMSFormTextAreaProps>) => {
  return (
    <Form.Item name={name} label={label} className={className} {...other}>
      <MSTextArea permissions={permissions} {...textAreaProps} />
    </Form.Item>
  );
};
