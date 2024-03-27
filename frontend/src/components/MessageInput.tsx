import { SendHorizontal } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import useSendMessage from '../hooks/useSendMessage';

export default function MessageInput() {
  const [message, setMessage] = useState({ message: '' });
  const { isLoading, sendMessage } = useSendMessage();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage({ message: '' });
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full flex gap-4'>
        <input
          type='text'
          name='message'
          className='input input-bordered input-primary text-sm rounded-lg block w-full p-2.5'
          placeholder='Send a message...'
          value={message.message}
          onChange={handleChange}
        ></input>
        <button
          type='submit'
          className='flex items-center justify-center btn btn-secondary btn-circle'
        >
          {isLoading ? (
            <span className='loading loading-spinner loading-md'></span>
          ) : (
            <SendHorizontal />
          )}
        </button>
      </div>
    </form>
  );
}
