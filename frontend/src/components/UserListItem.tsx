import useChat from '../zustand/useChat';

type User = {
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  profilePic: string;
  _id: string;
};

type UserListItemProps = {
  user: User;
  lastIndex: boolean;
};

export default function UserListItem({ user, lastIndex }: UserListItemProps) {
  const { selectedUser, setSelectedUser } = useChat();
  const isSelected = selectedUser?._id === user._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 cursor-pointer ${isSelected ? 'bg-primary text-primary-content' : ''}`}
        onClick={() => setSelectedUser(user)}
      >
        <div className='avatar online'>
          <div className='w-10 rounded-full'>
            <img alt='user profile picture' src={user.profilePic} />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold'>{`${user.firstName} ${user.lastName}`}</p>
            {/* TODO: ADD BADGE ICON TO INDICATE NEW MESSAGES RCVED  */}
            {/* <span className='badge badge-primary badge-md'>1</span> */}
          </div>
        </div>
      </div>
      {!lastIndex && <div className='divider my-0 py-0 h-1'></div>}
    </>
  );
}
