import { Space, SpaceProps } from "antd";
import { MSProps } from "../interfaces";

export const MSSpace = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<SpaceProps>) => {
  return (
    <Space className={className} {...other}>
      {children}
    </Space>
  );
};
