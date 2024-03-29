import { useState } from 'react';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';
import { useAuthContext } from '../context/AuthContext';

export default function useUpdatePicture() {
  const [isLoading, setIsLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  async function updatePicture(profilePic: object) {
    setIsLoading(true);
    try {
      const res = await axios.put(
        `/api/users/${authUser?._id}/profilePic`,
        profilePic,
      );
      if (res.status === 200) {
        toast.success('Successfully updated profile picture.');
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
  return { isLoading, updatePicture };
}
