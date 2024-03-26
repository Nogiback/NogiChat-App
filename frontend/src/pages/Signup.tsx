import { BotMessageSquare } from 'lucide-react';

export default function Signup() {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg bg-base-200 p-8 gap-4 shadow-xl overflow-hidden bg-clip-padding backdrop-blur-xl bg-opacity-0 border border-base-200'>
      <BotMessageSquare size={32} />
      <h3 className='text-4xl font-bold'>Welcome to NogiChat</h3>
      <p>Sign up below to join the community!</p>
      <form className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <input
            name='firstName'
            type='text'
            className='input input-bordered w-full'
            placeholder='First Name'
          />
          <input
            name='lastName'
            type='text'
            className='input input-bordered w-full'
            placeholder='Last Name'
          />
        </div>
        <select className='select select-bordered w-full'>
          <option disabled selected>
            Gender
          </option>
          <option>Man</option>
          <option>Woman</option>
          <option>Transgender</option>
          <option>Genderqueer</option>
          <option>Agender</option>
          <option>Genderless</option>
          <option>Non-Binary</option>
          <option>Cis Man</option>
          <option>Cis Woman</option>
          <option>Trans Man</option>
          <option>Trans Woman</option>
          <option>Third Gender</option>
          <option>Two-Spirit</option>
          <option>Bigender</option>
          <option>Genderfluid</option>
          <option>Prefer Not To Say</option>
        </select>
        <input
          name='email'
          type='text'
          className='input input-bordered w-full'
          placeholder='Email'
        />
        <input
          name='username'
          type='text'
          className='input input-bordered w-full'
          placeholder='Username'
        />
        <input
          name='password'
          type='password'
          className='input input-bordered w-full'
          placeholder='Password'
        />
        <input
          name='confirmPassword'
          type='password'
          className='input input-bordered w-full'
          placeholder='Confirm Password'
        />
        <button className='btn btn-primary'>Submit</button>
      </form>
      <div className='flex items-center gap-2'>
        <p>Already a member?</p>
        <a className='link link-primary link-hover' href='/login'>
          Log in here.
        </a>
      </div>
    </div>
  );
}
