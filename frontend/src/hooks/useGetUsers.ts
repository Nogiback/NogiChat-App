import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type User = {
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  profilePic: string;
  _id: string;
  username: string;
};

export default function useGetUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      try {
        const res = await axios.get('/api/users');
        if (res.data.error) {
          throw new Error(res.data.error);
        }
        setUsers(res.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          toast.error(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return { isLoading, users };
}
