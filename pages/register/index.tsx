import { MSCard, MSNotification, MSSpinner } from '@/components';
import { useLogin } from '@/components/auth';
import { IRegisterEmail } from '@/components/auth/components/register/model';
import { RegisterForm } from '@/components/auth/components/register/register-form';
import { MSLogo } from '@/utils/icons';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const { handleRegisterUser, registerMutationStatus } = useLogin();
  const handleSubmit = async (values: IRegisterEmail) => {
    // onSubmit?.()
    try {
      const data = await handleRegisterUser?.(values.email);
      if (data.success) {
        MSNotification('success', data.message || 'Registered');
        if (!data.is_verified) {
          router.push(`/register/verify-otp?email=${values.email}`);
        } else {
          if (data.token) {
            router.push(
              `/register/finish-sign-up?token=${encodeURIComponent(data.token)}`
            );
          } else {
            MSNotification('error', 'Something went wrong please try again');
          }
        }
      }
    } catch (error: any) {
      MSNotification('error', error?.message);
    }
  };
  return (
    <div className="register-wrapper h-screen flex items-center justify-center">
      <MSCard className="w-4/5 sm:w-4/5 md:max-w-xl">
        <MSSpinner loading={registerMutationStatus?.isLoading}>
          <div className="form-content-wrapper  mx-auto">
            <div className="logo mx-auto w-full flex justify-center">
              <div className="w-[140px]">
                <MSLogo />
              </div>
            </div>
            <div className="register-form-wrapper pt-8">
              <RegisterForm onSubmit={handleSubmit} />
            </div>
          </div>
        </MSSpinner>
      </MSCard>
    </div>
  );
};
Register.getLayout = (page: any) => page;

export default Register;
