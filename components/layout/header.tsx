import { MSLogo } from '@/utils/icons/logo';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { MSButton, MSDropdown, MSLink } from '../lib';

export const Header = () => {
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
