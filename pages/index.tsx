import { MSCard, MSComingSoon, MSSpinner } from '@/components';
import { useAuthentication, withAuth } from '@/components/auth';
import { MainLayout } from '@/components/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const isAuthenticated = useAuthentication();
  useEffect(() => {
    router.push('/all');
  }, []);
  const router = useRouter();
  if (!isAuthenticated) {
    return (
      <MSSpinner
        className="spin-wrapper h-[calc(100vh-100px)] w-full flex items-center justify-center"
        size="large"
      />
    );
  }

  return (
    <>
      <MSCard className="h-full">
        <MSComingSoon />
      </MSCard>
    </>
  );
};
export default withAuth(Home);
