import { ForgotPasswordForm } from '@/components/auth';
import { MSCard, MSNotification } from '@/components';
import { useRouter } from 'next/router';
import { MSLogo } from '@/utils/icons';

const ForgotPassword = () => {
  return <p>Forgot password</p>;
  // const router = useRouter();
  // const [forgotPassword, forgotPasswordStatus] = useForgotPasswordMutation();
  // const handleSubmit = (values: any) => {
  //   if (values.email) {
  //     forgotPassword({
  //       identifier: values.email,
  //     })
  //       .unwrap()
  //       .then((data) => {
  //         if (data?.forgotPassword?.message) {
  //           MSNotification('success', data?.forgotPassword?.message);
  //         }
  //         router.push(
  //           `/reset-password/verify-otp?email=${encodeURIComponent(
  //             values.email
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
  //           <div className="text-xl font-semibold text-center">
  //             Reset Password
  //           </div>
  //         </div>
  //         <div className="flex">
  //           <ForgotPasswordForm
  //             loading={forgotPasswordStatus.isLoading}
  //             onSubmit={handleSubmit}
  //           />
  //         </div>
  //       </div>
  //     </MSCard>
  //   </div>
  // );
};

export default ForgotPassword;
