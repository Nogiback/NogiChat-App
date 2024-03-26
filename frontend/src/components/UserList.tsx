import UserListItem from './UserListItem';

export default function UserList() {
  return (
    <div className='flex flex-col overflow-auto py-2 h-[450px]'>
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
    </div>
  );
}
