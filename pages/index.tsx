import { MSCard, MSComingSoon, MSSpinner } from '@/components';
import { useAuthentication, withAuth } from '@/components/auth';
import { MainLayout } from '@/components/layout';

const Home = () => {
  const isAuthenticated = useAuthentication();

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
      <MainLayout>
        <MSCard className="h-full">
          <MSComingSoon />
        </MSCard>
      </MainLayout>
    </>
  );
};
export default withAuth(Home);
