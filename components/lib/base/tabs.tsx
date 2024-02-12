import { Tabs, TabsProps } from "antd";
import { useMemo } from "react";
import { MSProps } from "../interfaces";
interface IMSTabsProps extends Omit<TabsProps, "items"> {
  items: any[] | undefined;
}

export const MSTabs = ({
  className,
  permissions,
  children,
  items,
  ...other
}: MSProps<IMSTabsProps>) => {
  // TODO: WRITE LOGIC FOR EACH ITEM PERMISSIONS BY USING USE MEMO AND ENHANCED CONFIG
  const enhancedItems = useMemo(() => {
    return items;
  }, [items]);
  return <Tabs items={enhancedItems} className={className} {...other} />;
};
