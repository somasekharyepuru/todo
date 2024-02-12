import { ISideMenuSliceState } from '@/components';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

export const Footer = ({ children }: PropsWithChildren<any>) => {
  const { isCollapsed } = useSelector(
    (state: any) => state.sideMenu as ISideMenuSliceState,
  );
  return (
    <footer
      id="layout_footer"
      className={`bg-white fixed h-footer bottom-0 left-0 right-0 p-6 z-50`}
    >
      {children}
    </footer>
  );
};
