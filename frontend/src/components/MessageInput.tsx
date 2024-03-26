import React from 'react';
import { SendHorizontal } from 'lucide-react';

export default function MessageInput() {
  return (
    <form className='px-4 my-3'>
      <div className='w-full flex gap-4'>
        <input
          type='text'
          className='input input-bordered input-primary text-sm rounded-lg block w-full p-2.5'
          placeholder='Send a message...'
        ></input>
        <button
          type='submit'
          className='flex items-center btn btn-secondary btn-circle'
        >
          <SendHorizontal />
        </button>
      </div>
    </form>
  );
}
