import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const useAuthentication = () => {
  const router = useRouter();
  const { token } = useSelector((state) => (state as any).session);
  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token]);

  return typeof window !== 'undefined' && !!token;
};
