import { useResendOtpMutation, useVerifyOtpMutation } from '@/api';
import { MSNotification, MSCard } from '@/components';
import { OtpTimer, VerifyOtpForm } from '@/components/auth';
import { MSLogo } from '@/utils';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const VerifyOtp = () => {
  const router = useRouter();
  const { email: emailEncoded } = router.query;
  const email = useMemo(() => {
    if (emailEncoded) {
      return decodeURIComponent(emailEncoded as string);
    }
    return '';
  }, [emailEncoded]);
  const [resendOtp, resendOtpStatus] = useResendOtpMutation();

  const resendOTP = () => {
    if (email) {
      resendOtp({
        email,
      })
        .unwrap()
        .then((data) => {
          if (data?.resendOtp?.message) {
            MSNotification('success', data?.resendOtp?.message);
          }
        })
        .catch((error) => {
          MSNotification('error', error.message);
        });
    }
  };
  const [verifyOtp, verifyOtpStatus] = useVerifyOtpMutation();
  const handleSubmit = async (values: any) => {
    if (values.otp) {
      verifyOtp({
        input: {
          email: email as string,
          otp: +values.otp,
        },
      })
        .unwrap()
        .then((data) => {
          if (data?.verifyOtp?.token) {
            MSNotification('success', 'OTP Verified successfully');
          }
          router.push(
            `/reset-password/create-password?token=${encodeURIComponent(
              data?.verifyOtp?.token
            )}`
          );
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
            <div className="text-xl font-semibold text-center">Verify OTP</div>
          </div>
          <div className="flex">
            <VerifyOtpForm
              loading={verifyOtpStatus.isLoading}
              onSubmit={handleSubmit}
            />
          </div>
          <div className="mt-2">
            <OtpTimer onResendOtp={resendOTP} />
          </div>
        </div>
      </MSCard>
    </div>
  );
};
VerifyOtp.getLayout = (page: any) => page;
export default VerifyOtp;
