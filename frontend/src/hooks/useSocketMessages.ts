import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useChat from '../zustand/useChat';

export default function useSocketMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useChat();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket?.off('newMessage');
    };
  }, [socket, messages, setMessages]);
}
