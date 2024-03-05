import { useLogoutMutation } from '@/api';
import { useDispatch } from 'react-redux';
import { clearSession } from '../slice';
// import { useSignOutMutation } from '@/api';

export const useLogout = () => {
  const dispatch = useDispatch();
  const [signOut] = useLogoutMutation();
  const logout = async () => {
    await signOut();
    dispatch(clearSession());
  };

  return { logout };
};
