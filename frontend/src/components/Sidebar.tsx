import React from 'react';
import SidebarNav from './SidebarNav';

export default function Sidebar() {
  return (
    <div className='drawer md:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-side h-[100%]'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 h-full w-80 bg-base-200 text-base-content'>
          <SidebarNav />
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 3</a>
          </li>
          <li>
            <a>Sidebar Item 4</a>
          </li>
          <li>
            <a>Sidebar Item 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
