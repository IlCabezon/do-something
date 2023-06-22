// native
import { useContext, Fragment } from 'react';

// components
import { Menu, Transition } from '@headlessui/react';
import { AiFillHome } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

// routing
import { Link } from 'react-router-dom';

// context
import { AuthContext } from '../contexts/AuthContext';

export default function MenuAvatar({ user }) {
  const { logout } = useContext(AuthContext);
  const { avatar } = user;
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex">
          <div
            style={{ backgroundColor: avatar.color }}
            className="w-[50px] h-[50px] flex items-center justify-center rounded-full"
          >
            <p className="font-bold text-[18px] text-primary uppercase">{avatar.name}</p>
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/home"
                    className={`${
                      active ? 'bg-secondary dark:text-primary text-inverse' : 'text-primary'
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <AiFillHome
                      size={16}
                      className={active ? ' dark:text-primary text-inverse' : 'text-secondary'}
                    />
                    Go to Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/activities-to-do"
                    className={`${
                      active ? 'bg-secondary dark:text-primary text-inverse' : 'text-primary'
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <FaTasks
                      size={16}
                      className={active ? 'dark:text-primary text-inverse' : 'text-secondary'}
                    />
                    Go to my activities
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? 'bg-secondary dark:text-primary text-inverse' : 'text-primary'
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={logout}
                  >
                    <BiLogOut
                      size={16}
                      className={active ? 'dark:text-primary text-inverse' : 'text-secondary'}
                    />
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
