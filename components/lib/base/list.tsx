import { ListProps, List } from "antd";
import { MSProps } from "../interfaces";

export const MSList = ({
  className,
  permissions,
  children,
  ...other
}: MSProps<ListProps<any>>) => {
  return (
    <List className={className} {...other}>
      {children}
    </List>
  );
};
