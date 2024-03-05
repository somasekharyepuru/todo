import { useAppSelector } from '@/redux/hooks';
import { MenuProps, Popconfirm, Typography } from 'antd';
import { usePathname } from 'next/navigation';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MSButton, MSMenu, MSSider } from '../base';
import { getFormattedItems, getParentMenu, getSelectedKey } from './service';
import { ISideMenuItem } from './side-menu-interface';
import {
  ISideMenuSliceState,
  setIsCollapsed,
  setOpenKeys,
  setSelectedMenu,
} from './side-menu-slice';
import {
  ArrowDownOutlined,
  DownCircleFilled,
  DownCircleOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

interface sideMenuProps {
  items: ISideMenuItem[];
}

export const MSSideMenu = ({ items }: sideMenuProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathName = usePathname();
  const { isCollapsed, selected, openKeys } = useSelector(
    (state: any) => state.sideMenu as ISideMenuSliceState
  );
  const { user } = useAppSelector((state) => state.session);
  useEffect(() => {
    const keySelected = getSelectedKey(items, pathName);
    dispatch(setSelectedMenu(keySelected));
    const parentMenu = getParentMenu(items, keySelected);
    dispatch(setOpenKeys(parentMenu));
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

  const handleOpenChange: MenuProps['onOpenChange'] = (keys) => {
    dispatch(setOpenKeys(keys));
  };
  const handleConfirm = () => {
    router.push('/logout');
  };

  const handleCancel = () => {};
  return (
    <MSSider
      collapsible={true}
      collapsed={isCollapsed}
      onCollapse={(value) => handleCollapseEvent(value)}
    >
      <div className="flex p-2 justify-between items-center">
        <Typography className="text-semibold text-base text-white">
          {user?.name}
        </Typography>
        <div className="cursor-pointer">
          <Popconfirm
            title="Logout"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            okText="Yes"
            cancelText="No"
          >
            <DownCircleOutlined className="text-white" />
          </Popconfirm>
        </div>
      </div>
      <div className="mt-4">
        <MSMenu
          theme="dark"
          selectedKeys={selected ? [selected] : []}
          onOpenChange={handleOpenChange}
          mode="inline"
          items={enhancedMenuItems}
          onClick={handleMenuClick}
          openKeys={openKeys}
        />
      </div>
    </MSSider>
  );
};
