import { useGetProjectsQuery } from '@/api';
import { MSContent, MSSideMenu } from '@/components';
import { Layout } from 'antd';
import React, { useMemo } from 'react';
import { LayoutItems } from './layout-items';
interface mainLayoutProps {
  children?: React.ReactNode;
  app?: string;
}
export const MainLayout = ({ children }: mainLayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MSSideMenu items={LayoutItems} />
      <Layout>
        <MSContent>
          <MSContent>{children}</MSContent>
        </MSContent>
      </Layout>
    </Layout>
  );
};
