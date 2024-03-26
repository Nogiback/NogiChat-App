import { BotMessageSquare } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import useSignup from '../hooks/useSignup';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const { isLoading, signupUser } = useSignup();

  function handleFormChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signupUser(formData);
  }

  return (
    <div className='flex flex-col items-center justify-center rounded-lg bg-base-200 p-8 gap-4 shadow-xl overflow-hidden bg-clip-padding backdrop-blur-xl bg-opacity-0 border border-base-200'>
      <BotMessageSquare size={32} />
      <h3 className='text-4xl font-bold'>Welcome to NogiChat</h3>
      <p>Sign up below to join the community!</p>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex gap-4'>
          <input
            name='firstName'
            type='text'
            className='input input-bordered w-full'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleFormChange}
          />
          <input
            name='lastName'
            type='text'
            className='input input-bordered w-full'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleFormChange}
          />
        </div>
        <select
          className='select select-bordered w-full'
          name='gender'
          defaultValue='Gender'
          onChange={handleFormChange}
        >
          <option disabled>Gender</option>
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
          value={formData.email}
          onChange={handleFormChange}
        />
        <input
          name='username'
          type='text'
          className='input input-bordered w-full'
          placeholder='Username'
          value={formData.username}
          onChange={handleFormChange}
        />
        <input
          name='password'
          type='password'
          className='input input-bordered w-full'
          placeholder='Password'
          value={formData.password}
          onChange={handleFormChange}
        />
        <input
          name='confirmPassword'
          type='password'
          className='input input-bordered w-full'
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleFormChange}
        />
        <button type='submit' className='btn btn-primary' disabled={isLoading}>
          {isLoading ? (
            <span className='loading loading-spinner loading-md'></span>
          ) : (
            'Submit'
          )}
        </button>
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
