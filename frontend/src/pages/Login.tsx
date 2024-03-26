import { BotMessageSquare } from 'lucide-react';

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg bg-base-200 p-8 gap-4 shadow-xl overflow-hidden bg-clip-padding backdrop-blur-xl bg-opacity-0 border border-base-200'>
      <BotMessageSquare size={32} />
      <h3 className='text-4xl font-bold'>Login</h3>
      <p>Welcome Back to NogiChat!</p>
      <form className='flex flex-col gap-4'>
        <label className='input input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
          </svg>
          <input
            type='text'
            className='grow'
            placeholder='Username'
            name='username'
          />
        </label>
        <label className='input input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='w-4 h-4 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
              clipRule='evenodd'
            />
          </svg>
          <input
            type='password'
            className='grow'
            placeholder='Password'
            name='password'
          />
        </label>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
      <div className='flex items-center gap-2'>
        <p>Not a member?</p>
        <a className='link link-primary link-hover' href='/signup'>
          Sign up here.
        </a>
      </div>
    </div>
  );
}
