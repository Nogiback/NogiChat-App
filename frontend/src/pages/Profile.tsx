import React from 'react';

export default function Profile() {
  return (
    <div className='p-8 rounded-lg overflow-hidden bg-clip-padding backdrop-blur-lg bg-opacity-0'>
      <h2 className='text-3xl font-bold'>Profile</h2>
      <div className='flex flex-col items-center justify-center m-10'>
        <div className='avatar'>
          <div className='w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img
              src='https://ui-avatars.com/api/?name=Peter+Do'
              alt='user profile picture'
            />
          </div>
        </div>
      </div>
      <form className='flex flex-col gap-4'>
        <input
          name='profilePic'
          type='text'
          className='input input-bordered w-full'
          placeholder='Profile Image URL'
        />
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
        {
          // TODO: IMPLEMENT PASSWORD UPDATE FUNCTIONALITY
          /* <input
          name='newPassword'
          type='password'
          className='input input-bordered w-full'
          placeholder='New Password'
        />
        <input
          name='confirmNewPassword'
          type='password'
          className='input input-bordered w-full'
          placeholder='Confirm New Password'
        /> */
        }
        <div className='flex gap-3 justify-end'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
          <a className='btn btn-secondary' href='/'>
            Go Home
          </a>
        </div>
      </form>
    </div>
  );
}
