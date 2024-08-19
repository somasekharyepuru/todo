import { MSNotification } from '@/components';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setSession } from '../slice';
import { ILoginInput } from '../models/login-input';
import {
  RegisterUser,
  useApi
} from '@/api';
import { decodeJwt } from '@/utils';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [loginMutation, loginMutationStatus] = useApi.useLoginMutation();
  const [registerUserMutation, registerMutationStatus] = useApi.useRegisterMutation();
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
        const { id, accessToken, refreshToken, first_name, last_name, email } = value.login;
        const decoded = decodeJwt(accessToken);
        let expiryTime = decoded?.exp
          ? decoded?.exp
          : defaultTokenExpirationTimestamp;
        expiryTime *= 1000; // convert to milliseconds
        dispatch(
          setSession({
            token: accessToken,
            refreshToken,
            expiry: expiryTime,
            remember: !!remember,
            logout: false,
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
