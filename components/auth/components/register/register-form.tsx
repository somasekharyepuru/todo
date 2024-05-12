import {
  MSButton,
  MSForm,
  MSFormCheckBox,
  MSFormInput,
  MSFormPassword,
  MSLink,
} from '@/components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { IRegisterEmail } from './model';

interface RegisterFormProps {
  onSubmit?: (values: IRegisterEmail) => Promise<void>;
}
export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  return (
    <MSForm name="Register" onFinish={onSubmit}>
      <MSFormInput
        name="email"
        rules={[{ required: true, message: 'Please input email' }]}
        inputProps={{
          type: 'text',
          placeholder: 'Email',
          prefix: <UserOutlined className="site-form-item-icon" />,
        }}
      ></MSFormInput>
      <div className="form-btn mb-0">
        <MSButton
          type="primary"
          htmlType="submit"
          className="Register-form-button w-full bg-blue hover"
          label="Register"
        />
      </div>
    </MSForm>
  );
};
