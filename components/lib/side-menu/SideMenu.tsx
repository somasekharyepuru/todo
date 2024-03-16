import { useAppSelector } from '@/redux/hooks';
import {
  Collapse,
  CollapseProps,
  MenuProps,
  Popconfirm,
  Tooltip,
  Typography,
  theme,
} from 'antd';
import { usePathname } from 'next/navigation';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MSButton, MSMenu, MSModal, MSSider } from '../base';
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
  PlusOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ProjectList } from '@/components/projects/project-list';
import { CreateProject } from '@/components/projects/create-project';
import Projects from '@/components/projects/projects';

interface sideMenuProps {
  items: ISideMenuItem[];
}

export const MSSideMenu = ({ items }: sideMenuProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathName = usePathname();
  const { selected, openKeys } = useSelector(
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
      style={{
        background: 'white',
      }}
    >
      <div className="flex p-2 justify-between items-center">
        <Typography className="text-semibold text-base ">
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
            <DownCircleOutlined className="" />
          </Popconfirm>
        </div>
      </div>
      <div className="mt-4">
        <MSMenu
          selectedKeys={selected ? [selected] : []}
          onOpenChange={handleOpenChange}
          mode="inline"
          items={enhancedMenuItems}
          onClick={handleMenuClick}
          openKeys={openKeys}
        />
      </div>
      <div className="mt-8 p-2">
        <Projects />
      </div>
    </MSSider>
  );
};
