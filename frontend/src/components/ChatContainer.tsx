import React from 'react';

export default function ChatContainer() {
  return (
    <div className='min-w-[400px] sm:min-w-[500px] flex flex-col border md:rounded-l-none rounded-lg border-base-300 p-4'>
      <div className='flex items-center gap-2'>
        <div className='drawer-content'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-primary btn-sm md:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
        </div>
        <span className='label-text'>To: </span>
        <span className='font-bold'>John Doe</span>
      </div>
    </div>
  );
}
