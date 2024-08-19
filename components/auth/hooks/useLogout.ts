import { useDispatch } from 'react-redux';
import { clearSession, logout as storeLogout } from '../slice';
import { useApi } from '@/api';
export const useLogout = () => {
  const dispatch = useDispatch();
  const [signOut] = useApi.useLogoutMutation();
  const logout = async () => {
    await signOut();
    dispatch(clearSession());
    dispatch(storeLogout(false));
  };

  return { logout };
};
