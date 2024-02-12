import { Breadcrumb, BreadcrumbProps } from "antd";
import { useMemo } from "react";
import { MSProps } from "../interfaces";
interface IMSBreadcrumbProps extends Omit<BreadcrumbProps, "items"> {
  items: any[];
}
export const MSBreadcrumb = ({
  className,
  permissions,
  children,
  items,
  ...other
}: MSProps<IMSBreadcrumbProps>) => {
  // TODO: WRITE LOGIC FOR EACH ITEM PERMISSIONS BY USING USE MEMO AND ENHANCED CONFIG
  const enhancedItems = useMemo(() => {
    return items;
  }, [items]);
  return <Breadcrumb items={enhancedItems} className={className} {...other} />;
};
