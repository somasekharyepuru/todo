import { Spin, SpinProps } from "antd";
import { MSProps } from "../interfaces";
interface IMSSpinnerProps extends SpinProps {
  loading?: boolean;
  global?: boolean;
}
export const MSSpinner = ({
  className,
  permissions,
  loading = false,
  children,
  ...other
}: MSProps<IMSSpinnerProps>) => {
  // TODO: GLOBAL SPINNER IMPLEMENTATION
  const updatedClassName = global
    ? `h-[calc(100vh)] w-full flex items-center justify-center ${className}`
    : className;
  return (
    <Spin spinning={loading} className={updatedClassName} {...other}>
      {children}
    </Spin>
  );
};
