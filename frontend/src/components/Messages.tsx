import { useEffect, useRef } from 'react';
import useGetMessages from '../hooks/useGetMessages';
import Message from './Message';
import MessageLoading from './MessageLoading';

export default function Messages() {
  const { isLoading, messages } = useGetMessages();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // useEffect to scroll latest message into view
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }, [messages]);

  return (
    <div className='px-4 flex flex-col overflow-auto h-[430px]'>
      {isLoading && <MessageLoading />}
      {!isLoading && messages.length === 0 && (
        <p className='text-center py-48'>
          Send a message to start a conversation!
        </p>
      )}
      {!isLoading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
}
