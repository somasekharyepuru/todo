import {
  MSButton,
  MSForm,
  MSFormInput,
  MSFormInputNumber,
  MSFormPassword,
} from '@/components';
import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { IRegisterUserSignUp } from './model';
interface IFinishSignUpFormProps {
  onSubmit?: (values: any) => void;
  loading?: boolean;
}
export const FinishSignUpForm = ({
  onSubmit,
  loading,
}: IFinishSignUpFormProps) => {
  return (
    <MSForm name="finishSignUp" onFinish={onSubmit} className="w-full">
      <MSFormInput
        name="first_name"
        rules={[{ required: true, message: 'Please input First Name' }]}
        inputProps={{
          type: 'text',
          placeholder: 'First Name',
          prefix: <UserOutlined />,
        }}
      ></MSFormInput>
      <MSFormInput
        name="last_name"
        rules={[{ required: true, message: 'Please input Last Name' }]}
        inputProps={{
          type: 'text',
          placeholder: 'Last Name',
          prefix: <UserOutlined />,
        }}
      ></MSFormInput>
      <MSFormInputNumber
        name="phone"
        rules={[{ required: true, message: 'Please input Phone' }]}
        inputNumberProps={{
          placeholder: 'Phone',
          className: 'w-full',
          prefix: <PhoneOutlined />,
        }}
      ></MSFormInputNumber>
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
          prefix: <LockOutlined />,
        }}
      ></MSFormPassword>
      <div className="form-btn mb-0">
        <MSButton
          type="primary"
          htmlType="submit"
          className="sign-up-form-button w-full bg-blue hover"
          loading={loading}
        >
          Complete SignUp
        </MSButton>
      </div>
    </MSForm>
  );
};
