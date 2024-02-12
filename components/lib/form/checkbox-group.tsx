import { Checkbox, CheckboxProps } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import { MSProps } from "../interfaces";
export interface IMSCheckBoxGroupProps extends CheckboxGroupProps {
  label?: React.ReactNode;
}
export const MSCheckBoxGroup = ({
  label,
  className,
  permissions,
  children,
  ...other
}: MSProps<IMSCheckBoxGroupProps>) => {
  return <Checkbox.Group className={className} {...other} />;
};
