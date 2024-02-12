import { useLogout } from '@/components/auth';
import { MSNotification, MSSpinner } from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LogoutPage() {
  const router = useRouter();
  const { logout } = useLogout();
  useEffect(() => {
    logout()
      .then(() => {
        router.push('/login');
      })
      .catch((error) => {
        MSNotification('error', 'Unable to sign out');
      });
  }, []);
  return <MSSpinner loading={true} />;
}
