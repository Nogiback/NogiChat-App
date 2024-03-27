import { useState } from 'react';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';
import { useAuthContext } from '../context/AuthContext';

type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export default function useSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  async function signupUser(formData: FormData) {
    const isValid = handleInputErrors(formData);
    if (!isValid) return;
    setIsLoading(true);

    try {
      const res = await axios.post('/api/auth/signup', formData);
      if (res.status === 201) {
        toast.success('Account successfully created.');
      } else {
        throw new Error(res.data);
      }
      localStorage.setItem('authUser', JSON.stringify(res.data));
      setAuthUser(res.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, signupUser };
}

function handleInputErrors({
  firstName,
  lastName,
  gender,
  email,
  username,
  password,
  confirmPassword,
}: FormData) {
  if (
    !firstName ||
    !lastName ||
    !gender ||
    !email ||
    !username ||
    !password ||
    !confirmPassword
  ) {
    toast.error('Please fill out all fields.');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match.');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters.');
    return false;
  }

  return true;
}
