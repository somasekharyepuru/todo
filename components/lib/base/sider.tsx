import { Layout, SiderProps } from "antd";
import { MSProps } from "../interfaces";
const { Sider } = Layout;

export const MSSider = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<SiderProps>) => {
  return (
    <Sider className={className} {...other}>
      {children}
    </Sider>
  );
};
