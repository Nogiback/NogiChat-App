import useGetUsers from '../hooks/useGetUsers';
import UserListItem from './UserListItem';

export default function UserList() {
  const { isLoading, users } = useGetUsers();
  return (
    <div className='flex flex-col overflow-auto py-2 h-[450px]'>
      {users.map((user, index) => (
        <UserListItem
          key={user._id}
          user={user}
          lastIndex={index === users.length - 1}
        />
      ))}
      {isLoading ? (
        <div className='flex flex-col gap-4 justify-center items-center h-[450px]'>
          <span className='loading loading-spinner text-primary loading-lg'></span>
        </div>
      ) : null}
    </div>
  );
}
