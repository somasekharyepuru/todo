import { Layout as Content, LayoutProps } from "antd";
import { MSProps } from "../interfaces";

export const MSContent = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<LayoutProps>) => {
  return (
    <Content className={className} {...other}>
      {children}
    </Content>
  );
};
