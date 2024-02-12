import { Checkbox, CheckboxProps } from "antd";
import { MSProps } from "../interfaces";
export interface IMSCheckBoxProps extends CheckboxProps {
  label?: React.ReactNode;
}
export const MSCheckBox = ({
  label,
  className,
  permissions,
  children,
  ...other
}: MSProps<IMSCheckBoxProps>) => {
  return (
    <Checkbox className={className} {...other}>
      {label || children}
    </Checkbox>
  );
};
