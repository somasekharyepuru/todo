import { Button, ButtonProps } from "antd";
import { MSProps } from "../interfaces";
interface IMSButtonProps extends ButtonProps {
  label?: React.ReactNode;
}
export const MSButton = ({
  label,
  className,
  permissions,
  children,
  ...other
}: MSProps<IMSButtonProps>) => {
  return (
    <Button className={className} {...other}>
      {label || children}
    </Button>
  );
};
