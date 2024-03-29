import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import useUpdatePicture from '../hooks/useUpdatePicture';
import PictureModal from '../components/PictureModal';

export default function Profile() {
  const [profilePic, setProfilePic] = useState('');
  const { updatePicture } = useUpdatePicture();
  const { authUser } = useAuthContext();

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    await updatePicture({ profilePic });
    (document.getElementById('photoModal') as HTMLDialogElement).close();
    window.location.reload();
  }

  return (
    <div className='p-8 rounded-lg overflow-hidden bg-clip-padding backdrop-blur-lg bg-opacity-0'>
      <h2 className='text-3xl font-bold'>Profile</h2>
      <div className='flex flex-col gap-8 items-center justify-center m-10 md:flex-row'>
        <div className='avatar'>
          <div className='w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={authUser?.profilePic} alt='user profile picture' />
          </div>
        </div>

        <button
          className='btn btn-primary btn-sm'
          onClick={() =>
            (
              document.getElementById('photoModal') as HTMLDialogElement
            ).showModal()
          }
        >
          Update Picture
        </button>
      </div>
      <div className='items-center mt-8 sm:mt-14'>
        <div className='flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6'>
          <div className='w-full'>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-primary'
            >
              First Name
            </label>
            <p id='first_name' className='text-lg font-bold'>
              {authUser?.firstName}
            </p>
          </div>

          <div className='w-full'>
            <label
              htmlFor='last_name'
              className='block mb-2 text-sm font-medium text-primary'
            >
              Last Name
            </label>
            <p id='last_name' className='text-lg font-bold'>
              {authUser?.lastName}
            </p>
          </div>
        </div>

        <div className='mb-2 sm:mb-6'>
          <label
            htmlFor='username'
            className='block mb-2 text-sm font-medium text-primary'
          >
            Username
          </label>
          <p id='username' className='text-lg font-bold'>
            {authUser?.username}
          </p>
        </div>
        <div className='mb-2 sm:mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-primary'
          >
            Email
          </label>
          <p id='email' className='text-lg font-bold'>
            {authUser?.email}
          </p>
        </div>
        <div className='mb-2 sm:mb-6'>
          <label
            htmlFor='gender'
            className='block mb-2 text-sm font-medium text-primary'
          >
            Gender
          </label>
          <p id='gender' className='text-lg font-bold'>
            {authUser?.gender}
          </p>
        </div>
        <a href='/' className='btn btn-secondary w-full'>
          Back Home
        </a>
      </div>
      <PictureModal
        profilePic={profilePic}
        setProfilePic={setProfilePic}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
