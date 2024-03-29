import React from 'react';

type PictureModalProps = {
  profilePic: string;
  setProfilePic: (profilePic: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function PictureModal({
  profilePic,
  setProfilePic,
  handleSubmit,
}: PictureModalProps) {
  return (
    <dialog id='photoModal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-xl'>Set Profile Picture</h3>
        <div className='flex flex-col justify-center items-center w-full py-4'>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Paste Image URL Below</span>
            </div>
            <input
              type='text'
              className='input input-bordered w-full max-w-xs'
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            />
          </label>
        </div>
        <div className='modal-action'>
          <form method='dialog' className='flex gap-4'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className='btn btn-secondary'>Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
