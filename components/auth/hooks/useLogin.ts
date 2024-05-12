import { MSNotification } from '@/components';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setSession } from '../slice';
import { ILoginInput } from '../models/login-input';
import {
  CommonResponse,
  RegisterUser,
  useLoginMutation,
  useRegisterMutation,
} from '@/api';
import { decodeJwt } from '@/utils';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [loginMutation, loginMutationStatus] = useLoginMutation();
  const [registerUserMutation, registerMutationStatus] = useRegisterMutation();
  // const [triggerPasswordResetOtp] = useForgotPasswordMutation();
  const defaultTokenExpirationTimestamp = dayjs().add(30, 'minutes').valueOf(); // 30 minutes by default
  const handleLogin = ({ identifier, password, remember }: ILoginInput) => {
    loginMutation({
      user: {
        username: identifier,
        password,
      },
    })
      .unwrap()
      .then((value) => {
        const { id, token, first_name, last_name, email } = value.login;
        const decoded = decodeJwt(token);
        let expiryTime = decoded?.exp
          ? decoded?.exp
          : defaultTokenExpirationTimestamp;
        expiryTime *= 1000; // convert to milliseconds
        dispatch(
          setSession({
            token: token,
            expiry: expiryTime,
            remember: !!remember,
            user: {
              id,
              name: [first_name, last_name].join(' '),
              email,
            },
          })
        );
      })
      .catch((error) => MSNotification('error', 'Login', error.message));
  };

  const handleForgotPassword = ({ identifier }: { identifier: string }) => {
    // triggerPasswordResetOtp({ identifier })
    //   .unwrap()
    //   .then((value) => {})
    //   .catch((error) => MSNotification('error', 'Login', error.message));
  };

  const handleRegisterUser = async (email: string): Promise<RegisterUser> => {
    try {
      const data = await registerUserMutation({
        user: {
          email,
        },
      }).unwrap();
      return Promise.resolve(data.register);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    loginMutationStatus,
    handleLogin,
    handleForgotPassword,
    registerMutationStatus,
    handleRegisterUser,
  };
};
