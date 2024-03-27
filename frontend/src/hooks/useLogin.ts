import { useState } from 'react';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';
import { useAuthContext } from '../context/AuthContext';

type FormData = {
  username: string;
  password: string;
};

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  async function login(formData: FormData) {
    const isValid = handleInputErrors(formData);
    if (!isValid) return;
    setIsLoading(true);

    try {
      const res = await axios.post('/api/auth/login', formData);
      if (res.status === 200) {
        toast.success('User successfully logged in.');
      }
      localStorage.setItem('authUser', JSON.stringify(res.data));
      setAuthUser(res.data);
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === 401) {
        toast.error('Incorrect username or password.');
        return;
      }
      if (err instanceof AxiosError) {
        toast.error(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, login };
}

function handleInputErrors({ username, password }: FormData) {
  if (!username || !password) {
    toast.error('Please fill out all fields.');
    return false;
  } else {
    return true;
  }
}
