import { BotMessageSquare } from 'lucide-react';
import useLogout from '../hooks/useLogout';

export default function SidebarNav() {
  const { logout } = useLogout();

  return (
    <div className='navbar bg-base-300 rounded-box mb-2'>
      <div className='flex-1 px-2 lg:flex-none gap-1'>
        <BotMessageSquare size={28} />
        <a className='text-lg font-bold'>NogiChat</a>
      </div>
      <div className='flex justify-end flex-1 px-2'>
        <div className='flex items-stretch'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='User profile picture'
                  src='https://ui-avatars.com/api/?name=Peter+Do'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a href='/profile'>Profile</a>
              </li>
              <li>
                <details open>
                  <summary>Theme</summary>
                  <ul>
                    <li>
                      <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start text-xs'
                        aria-label='Light'
                        value='light'
                      />
                    </li>
                    <li>
                      <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start text-xs'
                        aria-label='Dark'
                        value='dark'
                      />
                    </li>
                    <li>
                      <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start text-xs'
                        aria-label='Cyberpunk'
                        value='cyberpunk'
                      />
                    </li>
                    <li>
                      <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start text-xs'
                        aria-label='Forest'
                        value='forest'
                      />
                    </li>
                    <li>
                      <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start text-xs'
                        aria-label='Aqua'
                        value='aqua'
                      />
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
