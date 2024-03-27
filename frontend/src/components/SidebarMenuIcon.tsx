export default function SidebarMenuIcon() {
  return (
    <div className='drawer-content'>
      <label
        htmlFor='sidebar-drawer'
        className='btn btn-primary btn-sm md:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='inline-block w-6 h-6 stroke-current'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </label>
    </div>
  );
}
