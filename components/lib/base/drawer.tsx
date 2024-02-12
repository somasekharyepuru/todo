import { Drawer, DrawerProps } from "antd";
import { MSProps } from "../interfaces";

export const MSDrawer = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<DrawerProps>) => {
  return (
    <Drawer className={className} {...other}>
      {children}
    </Drawer>
  );
};
