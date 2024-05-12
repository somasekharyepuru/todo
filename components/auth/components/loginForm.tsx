import {
  MSButton,
  MSForm,
  MSFormCheckBox,
  MSFormInput,
  MSFormPassword,
  MSLink,
} from '@/components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

interface LoginDataType {
  onSubmit?: (values: any) => Promise<void>;
}
export const LoginForm = ({ onSubmit }: LoginDataType) => {
  const initial: any = { remember: false };
  return (
    <MSForm name="login" initialValues={initial} onFinish={onSubmit}>
      <MSFormInput
        name="username"
        rules={[{ required: true, message: 'Please input user name' }]}
        inputProps={{
          type: 'text',
          placeholder: 'Username',
          prefix: <UserOutlined className="site-form-item-icon" />,
        }}
      ></MSFormInput>
      <MSFormPassword
        name="password"
        rules={[{ required: true, message: 'Please input password' }]}
        passwordProps={{
          placeholder: 'Password',
          prefix: <LockOutlined className="site-form-item-icon" />,
        }}
        className="mb-2"
      ></MSFormPassword>
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <MSLink
          href={'/reset-password/forgot-password'}
          className="login-form-forgot font-poppins text-blue text-sm font-normal capitalize"
        >
          Forgot password
        </MSLink>
      </div>
      <div className="form-btn mb-0">
        <MSButton
          type="primary"
          htmlType="submit"
          className="login-form-button w-full bg-blue hover"
          label="Log in"
        />
      </div>
      <div className="mt-2">
        <span>Not a user ? </span>
        <span className="text-blue">
          <MSLink href={'/register'}>Register</MSLink>
        </span>
      </div>
    </MSForm>
  );
};
