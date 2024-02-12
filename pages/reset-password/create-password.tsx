import { CreatePasswordForm } from '@/components/auth';
import { MSCard, MSNotification } from '@/components';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const CreatePassword = () => {
  return <h1>create password</h1>;
  // const router = useRouter();
  // const { accessToken: accessTokenEncoded } = router.query;
  // const accessToken = useMemo(() => {
  //   if (accessTokenEncoded) {
  //     return decodeURIComponent(accessTokenEncoded as string);
  //   }
  //   return '';
  // }, [accessTokenEncoded]);
  // const [createPassword, createPasswordStatus] = useResetPasswordMutation();
  // const handleSubmit = (values: any) => {
  //   if (values.password) {
  //     createPassword({
  //       password: values.password,
  //       confirmPassword: values.confirm_password,
  //       token: accessToken as string,
  //     })
  //       .unwrap()
  //       .then((data) => {
  //         if (data?.resetPassword?.message) {
  //           MSNotification('success', data?.resetPassword?.message);
  //         }
  //         router.push(`/login`);
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
  //           <div className="w-[140px]">{/* <MSLogo /> */}</div>
  //         </div>
  //         <div className="login-form-wrapper my-10">
  //           <div className="text-xl font-semibold text-center">
  //             Create Password
  //           </div>
  //         </div>
  //         <div className="flex">
  //           <CreatePasswordForm
  //             loading={createPasswordStatus.isLoading}
  //             onSubmit={handleSubmit}
  //           />
  //         </div>
  //       </div>
  //     </MSCard>
  //   </div>
  // );
};

export default CreatePassword;
