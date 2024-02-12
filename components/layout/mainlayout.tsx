import {
  ISideMenuSliceState,
  MSContent,
  MSSpinner,
  MSSideMenu,
} from '@/components';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './header';
interface mainLayoutProps {
  children?: React.ReactNode;
  app?: string;
}
export const MainLayout = ({ children }: mainLayoutProps) => {
  const [menuLoading, setMenuLoading] = useState(true);
  const { isCollapsed, selected } = useSelector(
    (state: any) => state.sideMenu as ISideMenuSliceState
  );
  const handleLoader = () => setMenuLoading(false);

  return (
    <>
      <Header />
      <MSContent className="main-layout-wrapper hasSider">
        <MSSideMenu handleLoader={handleLoader} items={[]} />
        <MSContent
          className={`${
            !isCollapsed
              ? 'ml-[285px]'
              : 'ml-[100px] transition-all duration-200 ease-linear'
          } main-content-wrapper mt-[5.5rem]  mb-[1rem] mr-[1.1rem]  md:mr-[1.1rem] lg:mr-[3rem]`}
        >
          <MSContent>
            {menuLoading ? (
              <MSSpinner
                className="spin-wrapper h-[calc(100vh-200px)] w-full flex items-center justify-center"
                size="large"
              />
            ) : (
              <> {children}</>
            )}
          </MSContent>
        </MSContent>
      </MSContent>
    </>
  );
};
