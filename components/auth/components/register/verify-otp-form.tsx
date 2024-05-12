import { MSForm, MSFormInput, MSButton } from '@/components/lib';

interface IVerifyOtpProps {
  onSubmit?: (values: any) => Promise<void>;
  loading?: boolean;
}
export const VerifyOtpForm = ({ onSubmit, loading }: IVerifyOtpProps) => {
  return (
    <MSForm name="verity_otp" onFinish={onSubmit} className="w-full">
      <MSFormInput
        name="otp"
        rules={[
          {
            required: true,
            message: 'Please input your Otp!',
          },
        ]}
        inputProps={{
          placeholder: 'Enter OTP',
        }}
      ></MSFormInput>
      <div className="form-btn mb-0">
        <MSButton
          type="primary"
          htmlType="submit"
          className="login-form-button w-full bg-blue hover"
          loading={loading}
        >
          Verify
        </MSButton>
      </div>
    </MSForm>
  );
};
