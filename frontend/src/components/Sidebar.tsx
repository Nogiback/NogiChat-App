import SidebarNav from './SidebarNav';
import UserList from './UserList';

export default function Sidebar() {
  return (
    <div className='drawer md:drawer-open z-10'>
      <input id='sidebar-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-side h-[610px] overflow-auto'>
        <label
          htmlFor='sidebar-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <div className='menu p-4 h-full w-80 bg-base-200 text-base-content'>
          <SidebarNav />
          <div className='divider px-2 my-2'></div>
          <UserList />
        </div>
      </div>
    </div>
  );
}
