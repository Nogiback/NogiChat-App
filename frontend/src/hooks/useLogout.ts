import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { useAuthContext } from '../context/AuthContext';

export default function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  async function logout() {
    setIsLoading(true);
    try {
      const res = await axios.post('/api/auth/logout');
      if (res.status === 200) {
        toast.success('User successfully logged out.');
      } else {
        throw new Error(res.data.error);
      }
      localStorage.removeItem('authUser');
      setAuthUser(null);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, logout };
}
