import { MSLogo } from '@/utils/icons/logo';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { MSButton, MSDropdown, MSLink, MSNotification } from '../lib';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearSession } from '../auth';
import { logout as storeLogout } from '../auth/slice';
export const Header = () => {
  const { logout } = useAppSelector((state) => state.session);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (logout) {
      MSNotification('error', 'Session expired please login');
      dispatch(clearSession());
      dispatch(storeLogout(false));
      router.push('/login');
    }
  }, [logout]);
  return (
    <header className="header-wrapper bg-white h-[72px] fixed top-0 w-full z-50 ">
      <nav className=" mx-auto md:w-[94%] 4xl:w-[97%] flex  items-center justify-between h-full ">
        <div className="w-[80px]">
          <MSLogo />
        </div>
        <div className="header-right-wrap flex justify-center items-center gap-5">
          <span className="notitication-icon w-6 text-lg flex cursor-pointer">
            <BellOutlined />
          </span>
          <MSDropdown
            type="normal"
            items={[
              {
                key: 'logout',
                label: (
                  <>
                    <MSLink href={'/logout'}>Logout</MSLink>
                  </>
                ),
                danger: true,
              },
            ]}
          >
            <MSButton>
              <UserOutlined />
            </MSButton>
          </MSDropdown>
        </div>
      </nav>
    </header>
  );
};
