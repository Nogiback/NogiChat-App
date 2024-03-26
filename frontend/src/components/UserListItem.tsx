export default function UserListItem() {
  return (
    <>
      <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
          <div className='w-10 rounded-full'>
            <img
              alt='user profile picture'
              src='https://ui-avatars.com/api/?background=random'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold'>John Doe</p>
            <span className='badge badge-primary badge-md'>1</span>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </>
  );
}
