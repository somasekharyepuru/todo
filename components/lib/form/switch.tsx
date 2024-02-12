import { Switch, SwitchProps } from "antd";
import { MSProps } from "../interfaces";
export const MSSwitch = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<SwitchProps>) => {
  return <Switch className={className} {...other} />;
};
