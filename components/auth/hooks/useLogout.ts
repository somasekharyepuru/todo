import { useDispatch } from 'react-redux';
import { clearSession } from '../slice';
// import { useSignOutMutation } from '@/api';

export const useLogout = () => {
  const dispatch = useDispatch();
  // const [signOut] = useSignOutMutation();
  const logout = async () => {
    // await signOut();
    // dispatch(removeHotel());
    dispatch(clearSession());
    // dispatch(storeLogout());
  };

  return { logout };
};
