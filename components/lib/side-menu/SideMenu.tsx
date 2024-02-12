import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedItems, getParentMenu, getSelectedKey } from "./service";
import { ISideMenuItem } from "./side-menu-interface";
import {
  ISideMenuSliceState,
  setIsCollapsed,
  setOpenKeys,
  setSelectedMenu,
} from "./side-menu-slice";
import { MSMenu, MSSider } from "../base";
import { MenuInfo } from "rc-menu/lib/interface";
import { MenuProps } from "antd";

interface sideMenuProps {
  handleLoader?: () => void;
  items: ISideMenuItem[];
}

export const MSSideMenu = ({ items, handleLoader }: sideMenuProps) => {
  const [isFooterExists, setIsFooterExists] = useState(false);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const { isCollapsed, selected, openKeys } = useSelector(
    (state: any) => state.sideMenu as ISideMenuSliceState
  );
  useEffect(() => {
    const keySelected = getSelectedKey(items, pathName);
    dispatch(setSelectedMenu(keySelected));
    const parentMenu = getParentMenu(items, keySelected);
    dispatch(setOpenKeys(parentMenu));
    handleLoader?.();
  }, [pathName]);

  const enhancedMenuItems = useMemo(() => {
    return getFormattedItems(items as ISideMenuItem[]);
  }, [items]);

  const handleCollapseEvent = (value: boolean) => {
    dispatch(setIsCollapsed(value));
  };

  const handleMenuClick = (e: MenuInfo) => {
    dispatch(setSelectedMenu(e.key));
  };

  useEffect(() => {
    const footerElement = document.getElementById("layout_footer");
    if (footerElement) {
      setIsFooterExists(true);
    } else {
      setIsFooterExists(false);
    }
  });

  const handleOpenChange: MenuProps["onOpenChange"] = (keys) => {
    dispatch(setOpenKeys(keys));
  };
  return (
    <MSSider
      className={`side-menu-wrapper pt-[70px] overflow-auto  h-[calc(100vh-0px)] left-0 top-0  fixed-important ${
        isFooterExists ? "mb-footer" : "bottom-0"
      }`}
      width={262}
      collapsible={true}
      collapsed={isCollapsed}
      onCollapse={(value) => handleCollapseEvent(value)}
    >
      <MSMenu
        theme="dark"
        selectedKeys={selected ? [selected] : []}
        onOpenChange={handleOpenChange}
        mode="inline"
        items={enhancedMenuItems}
        onClick={handleMenuClick}
        openKeys={openKeys}
      />
    </MSSider>
  );
};
