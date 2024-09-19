import { ReactElement, ReactNode, useEffect, useState } from 'react';
import '../global.scss';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import { persistor, store } from '../redux/store';
import { ConfigProvider } from 'antd';
import colors from '../colors';
import { PersistGate } from 'redux-persist/integration/react';
import { MainLayout } from '@/components/layout';
import { NextPage } from 'next';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface componentType {
  transition: string;
  visibility: 'visible' | 'hidden';
  opacity: number;
}
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Extend AppProps to include NextPageWithLayout
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const componentStyle: componentType = {
    transition: 'visibility 0s linear 0.25s, opacity 0.25s linear',
    visibility: mounted ? 'visible' : 'hidden',
    opacity: mounted ? 1 : 0,
  };
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorError: colors.danger,
        },
        components: {
          List: {
            footerBg: colors.footerBackground,
          },
        },
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
          >
            <div style={componentStyle}>
              {getLayout(<Component {...pageProps} />)}
            </div>
          </GoogleOAuthProvider>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}
export default dynamic(() => Promise.resolve(App), { ssr: false });
