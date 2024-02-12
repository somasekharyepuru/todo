import {
  ISideMenuSliceState,
  MSContent,
  MSSpinner,
  MSSideMenu,
} from '@/components';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './header';
import { Layout } from 'antd';
import { LayoutItems } from './layout-items';
import { useGetProjectsQuery } from '@/api';
interface mainLayoutProps {
  children?: React.ReactNode;
  app?: string;
}
export const MainLayout = ({ children }: mainLayoutProps) => {
  const { isCollapsed, selected } = useSelector(
    (state: any) => state.sideMenu as ISideMenuSliceState
  );
  const { data: projects, isFetching } = useGetProjectsQuery();
  const layoutItems = useMemo(() => {
    const items = LayoutItems.slice();
    if (projects?.getProjects.length) {
      items.push({
        key: 'projects',
        label: 'Projects',
        children: projects.getProjects.map((project) => ({
          key: project.id,
          label: project.name,
          url: `projects/${project.id}`,
        })),
      });
    }
    return items;
  }, [projects]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MSSideMenu items={layoutItems} />
      <Layout>
        <MSContent>
          <MSContent>{children}</MSContent>
        </MSContent>
      </Layout>
    </Layout>
  );
};
