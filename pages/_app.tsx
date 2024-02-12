import { useEffect, useState } from 'react';
import '../global.scss';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import { persistor, store } from '../redux/store';
import { ConfigProvider } from 'antd';
import colors from '../colors';
import { PersistGate } from 'redux-persist/integration/react';

interface componentType {
  transition: string;
  visibility: 'visible' | 'hidden';
  opacity: number;
}
const App = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const componentStyle: componentType = {
    transition: 'visibility 0s linear 0.25s, opacity 0.25s linear',
    visibility: mounted ? 'visible' : 'hidden',
    opacity: mounted ? 1 : 0,
  };

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
          <div style={componentStyle}>
            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
};
export default dynamic(() => Promise.resolve(App), { ssr: false });
