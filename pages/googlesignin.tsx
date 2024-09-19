import { useApi } from '@/api';
import { MSNotification } from '@/components';
import { setSession } from '@/components/auth';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const GoogleSignInPage = () => {
  const router = useRouter();
  const { accessToken, refreshToken } = router.query;
  const [getUser, { ...userStatus }] = useApi.useLazyMeQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (accessToken && refreshToken) {
      dispatch(
        setSession({
          token: accessToken as string,
          refreshToken: refreshToken as string,
          remember: true,
          expiry: 0,
        })
      );
      getUser()
        .unwrap()
        .then((data) => {
          dispatch(
            setSession({
              token: accessToken as string,
              refreshToken: refreshToken as string,
              remember: true,
              expiry: 0,
              user: {
                id: data.me.id,
                name: [data?.me?.first_name, data?.me?.last_name].join(' '),
                email: data.me.email,
              },
            })
          );
          setTimeout(() => {
            router.push('/all');
          }, 1000);
        })
        .catch(() => {
          router.push('/login');
          MSNotification('error', 'Error', 'Issue with google sign in');
        });
    }
  }, [accessToken, refreshToken]);
  return <></>;
};
GoogleSignInPage.getLayout = (page: any) => page;

export default GoogleSignInPage;
