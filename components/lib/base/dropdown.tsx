import { Dropdown, DropdownProps, MenuProps } from "antd";
import { useMemo } from "react";
import { MSProps } from "../interfaces";
import { DownOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";

export interface IMSDropdownProps extends DropdownProps {
  items: any[];
  type?: "button" | "normal";
  onClick?: (info: MenuInfo) => void;
}

export const MSDropdown = ({
  className,
  permissions,
  children,
  items,
  menu,
  onClick,
  type = "button",
  ...other
}: MSProps<IMSDropdownProps>) => {
  // TODO: WRITE LOGIC FOR EACH ITEM PERMISSIONS BY USING USE MEMO AND ENHANCED CONFIG
  const enhancedItems = useMemo(() => {
    return items;
  }, [items]);
  const menuProps: MenuProps = {
    ...menu,
    items: enhancedItems,
    onClick,
  };
  if (type === "button") {
    return (
      <Dropdown.Button
        icon={<DownOutlined />}
        menu={menuProps}
        className={className}
        {...other}
      >
        {children}
      </Dropdown.Button>
    );
  } else {
    return (
      <Dropdown menu={menuProps} className={className} {...other}>
        {children}
      </Dropdown>
    );
  }
};
