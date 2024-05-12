import { MSCard, MSComingSoon, MSSpinner } from '@/components';
import { useAuthentication, withAuth } from '@/components/auth';
import { MainLayout } from '@/components/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const isAuthenticated = useAuthentication();
  const router = useRouter();
  if (!isAuthenticated) {
    return (
      <MSSpinner
        className="spin-wrapper h-[calc(100vh-100px)] w-full flex items-center justify-center"
        size="large"
      />
    );
  }

  useEffect(() => {
    router.push('/all');
  }, []);
  return (
    <>
      <MainLayout>
        <MSCard className="h-full">
          <MSComingSoon />
        </MSCard>
      </MainLayout>
    </>
  );
};
export default withAuth(Home);
