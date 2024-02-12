import { Radio, RadioProps } from "antd";
import { MSProps } from "../interfaces";
interface IMSRadioButtonProps extends RadioProps {
  label?: React.ReactNode;
}
export const MSRadioButton = ({
  label,
  className,
  permissions,
  children,
  ...other
}: MSProps<IMSRadioButtonProps>) => {
  return (
    <Radio.Button className={className} {...other}>
      {label || children}
    </Radio.Button>
  );
};
