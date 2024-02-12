import { MSButton, MSForm, MSFormInput } from '@/components';
import { MailOutlined } from '@ant-design/icons';
interface IForgotPasswordProps {
  onSubmit?: (values: any) => void;
  loading?: boolean;
}
export const ForgotPasswordForm = ({
  onSubmit,
  loading,
}: IForgotPasswordProps) => {
  const initial: any = { remember: false };
  return (
    <MSForm
      name="forgot_password"
      initialValues={initial}
      onFinish={onSubmit}
      className="w-full"
    >
      <MSFormInput
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
        inputProps={{
          prefix: <MailOutlined className="site-form-item-icon" />,
          placeholder: 'Email',
        }}
      ></MSFormInput>
      <div className="form-btn mb-0">
        <MSButton
          type="primary"
          htmlType="submit"
          className="login-form-button w-full bg-blue hover"
          loading={loading}
        >
          Send OTP
        </MSButton>
      </div>
    </MSForm>
  );
};
