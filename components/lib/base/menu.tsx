import { Menu, MenuProps } from "antd";
import { useMemo } from "react";
import { MSProps } from "../interfaces";
export interface IMSMenuProps extends Omit<MenuProps, "items"> {
  items: any[];
}

export const MSMenu = ({
  className,
  permissions,
  children,
  items,
  ...other
}: MSProps<IMSMenuProps>) => {
  // TODO: WRITE LOGIC FOR EACH ITEM PERMISSIONS BY USING USE MEMO AND ENHANCED CONFIG
  const enhancedItems = useMemo(() => {
    return items;
  }, [items]);
  return <Menu items={enhancedItems} className={className} {...other} />;
};
