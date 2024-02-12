import { MSButton, MSForm, MSFormPassword } from '@/components';
import { LockOutlined } from '@ant-design/icons';
interface ICreatePasswordFormProps {
  onSubmit?: (values: any) => void;
  loading?: boolean;
}
export const CreatePasswordForm = ({
  onSubmit,
  loading,
}: ICreatePasswordFormProps) => {
  const initial: any = { remember: false };
  return (
    <MSForm
      name="verity_otp"
      initialValues={initial}
      onFinish={onSubmit}
      className="w-full"
    >
      <MSFormPassword
        name={'password'}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        passwordProps={{
          placeholder: 'Password',
          prefix: <LockOutlined className="site-form-item-icon" />,
        }}
      ></MSFormPassword>
      <MSFormPassword
        name={'confirm_password'}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        passwordProps={{
          placeholder: 'Confirm Password',
          prefix: <LockOutlined className="site-form-item-icon" />,
        }}
      ></MSFormPassword>
      <div className="form-btn mb-0">
        <MSButton
          type="primary"
          htmlType="submit"
          className="login-form-button w-full bg-blue hover"
          loading={loading}
        >
          Reset Password
        </MSButton>
      </div>
    </MSForm>
  );
};
