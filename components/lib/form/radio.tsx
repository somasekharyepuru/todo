import { Radio, RadioProps } from "antd";
import { MSProps } from "../interfaces";
interface IMSRadioProps extends RadioProps {
  label?: React.ReactNode;
}
export const MSRadio = ({
  label,
  className,
  permissions,
  children,
  ...other
}: MSProps<IMSRadioProps>) => {
  return (
    <Radio className={className} {...other}>
      {label || children}
    </Radio>
  );
};
