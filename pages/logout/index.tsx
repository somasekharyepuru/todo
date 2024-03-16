import { clearSession, useLogout } from '@/components/auth';
import { MSNotification, MSSpinner } from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';

export default function LogoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { logout } = useLogout();

  useEffect(() => {
    logout()
      .then(() => {
        router.push('/login');
        dispatch(clearSession());
      })
      .catch((error) => {
        MSNotification('error', 'Unable to sign out');
        dispatch(clearSession());
      });
  }, []);
  return <MSSpinner loading={true} />;
}
