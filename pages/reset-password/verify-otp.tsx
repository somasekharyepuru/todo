import { OtpTimer, VerifyOtpForm } from '@/components/auth';
import { MSNotification, MSCard } from '@/components';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { MSLogo } from '@/utils/icons';

const VerifyOtp = () => {
  return <p>Verify OTP</p>;
  // const router = useRouter();
  // const { email: emailEncoded } = router.query;
  // const email = useMemo(() => {
  //   if (emailEncoded) {
  //     return decodeURIComponent(emailEncoded as string);
  //   }
  //   return '';
  // }, [emailEncoded]);
  // const [forgotPassword, forgotPasswordStatus] = useForgotPasswordMutation();

  // const resendOTP = () => {
  //   if (email) {
  //     forgotPassword({
  //       identifier: email,
  //     })
  //       .unwrap()
  //       .then((data) => {
  //         if (data?.forgotPassword?.message) {
  //           MSNotification('success', data?.forgotPassword?.message);
  //         }
  //       })
  //       .catch((error) => {
  //         MSNotification('error', error.message);
  //       });
  //   }
  // };
  // const [verifyOtp, verifyOtpStatus] = useVerifyResetPasswordOtpMutation();
  // const handleSubmit = async (values: any) => {
  //   if (values.otp) {
  //     verifyOtp({
  //       identifier: email as string,
  //       token: values.otp,
  //     })
  //       .unwrap()
  //       .then((data) => {
  //         if (data?.verifyResetPasswordOTP?.accessToken) {
  //           MSNotification('success', 'OTP Verified successfully');
  //         }
  //         router.push(
  //           `/reset-password/create-password?accessToken=${encodeURIComponent(
  //             data?.verifyResetPasswordOTP?.accessToken
  //           )}`
  //         );
  //       })
  //       .catch((error) => {
  //         MSNotification('error', error.message);
  //       });
  //   }
  // };

  // return (
  //   <div className="h-screen flex items-center justify-center">
  //     <MSCard className="w-4/5 sm:w-4/5 md:max-w-xl">
  //       <div className="form-content-wrapper  mx-auto">
  //         <div className="logo mx-auto w-full flex justify-center">
  //           <div className="w-[140px]">
  //             <MSLogo />
  //           </div>
  //         </div>
  //         <div className="login-form-wrapper my-10">
  //           <div className="text-xl font-semibold text-center">Verify OTP</div>
  //         </div>
  //         <div className="flex">
  //           <VerifyOtpForm
  //             loading={verifyOtpStatus.isLoading}
  //             onSubmit={handleSubmit}
  //           />
  //         </div>
  //         <div className="mt-2">
  //           <OtpTimer onResendOtp={resendOTP} />
  //         </div>
  //       </div>
  //     </MSCard>
  //   </div>
  // );
};

export default VerifyOtp;
