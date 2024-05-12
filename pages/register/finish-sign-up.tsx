import { useFinishSignUpMutation } from '@/api';
import { MSNotification, MSCard } from '@/components';
import { CreatePasswordForm, setSession } from '@/components/auth';
import { FinishSignUpForm } from '@/components/auth/components/register/finish-signup-form';
import { IRegisterUserSignUp } from '@/components/auth/components/register/model';
import { useAppDispatch } from '@/redux/hooks';
import { MSLogo } from '@/utils';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const FinishSignUp = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { token: accessTokenEncoded } = router.query;
  const accessToken = useMemo(() => {
    if (accessTokenEncoded) {
      return decodeURIComponent(accessTokenEncoded as string);
    }
    return '';
  }, [accessTokenEncoded]);
  const [finishSignUp, finishSignUpStatus] = useFinishSignUpMutation();
  const handleSubmit = (values: IRegisterUserSignUp) => {
    if (values.password) {
      finishSignUp({
        user: {
          first_name: values.first_name,
          last_name: values.last_name,
          password: values.password,
          token: accessToken,
          phone: values.phone,
        },
      })
        .unwrap()
        .then((data) => {
          dispatch(
            setSession({
              token: data?.finishSignUp?.token,
              expiry: 0,
              remember: false,
              user: {
                id: data?.finishSignUp?.id,
                name: [
                  data?.finishSignUp?.first_name,
                  data?.finishSignUp?.last_name,
                ].join(' '),
                email: data?.finishSignUp?.email,
              },
            })
          );
          router.push('/');
        })
        .catch((error) => {
          MSNotification('error', error.message);
        });
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <MSCard className="w-4/5 sm:w-4/5 md:max-w-xl">
        <div className="form-content-wrapper  mx-auto">
          <div className="logo mx-auto w-full flex justify-center">
            <div className="w-[140px]">
              <MSLogo />
            </div>
          </div>
          <div className="login-form-wrapper my-10">
            <div className="text-xl font-semibold text-center">
              Create Password
            </div>
          </div>
          <div className="flex">
            <FinishSignUpForm
              loading={finishSignUpStatus.isLoading}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </MSCard>
    </div>
  );
};

export default FinishSignUp;
