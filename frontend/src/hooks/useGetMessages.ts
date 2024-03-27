import { useState, useEffect } from 'react';
import useChat from '../zustand/useChat';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';

export default function useGetMessages() {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages, selectedUser } = useChat();

  useEffect(() => {
    async function fetchMessages() {
      setIsLoading(true);
      try {
        const res = await axios.get(`/api/messages/${selectedUser?._id}`);
        if (res.data.error) {
          throw new Error(res.data.error);
        }
        setMessages(res.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          toast.error(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedUser?._id) {
      fetchMessages();
    }
  }, [selectedUser?._id, setMessages]);

  return { isLoading, messages };
}
