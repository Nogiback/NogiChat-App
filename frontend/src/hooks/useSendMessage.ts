import { useState } from 'react';
import useChat from '../zustand/useChat';
import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';

export default function useSendMessage() {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages, selectedUser } = useChat();

  async function sendMessage(message: object) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `/api/messages/send/${selectedUser?._id}`,
        message,
      );
      if (res.data.error) {
        throw new Error(res.data);
      }
      setMessages([...messages, res.data]);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, sendMessage };
}
