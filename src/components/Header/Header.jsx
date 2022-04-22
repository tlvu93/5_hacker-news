import {useState} from 'react';
import logo from './logo.png';
import PropTypes from 'prop-types';

const Header = ({createNewQuery}) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="flex fixed z-10 top-0 h-12 w-full items-center justify-center wire bg-white">
      <div className="pl-4">
        <a href="/">
          <img className="h-8" src={logo} alt="Logo" />
        </a>
      </div>
      {/* Searchbar and Profile Button*/}
      <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5 justify-between pr-4">
        <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
          {/* Searchbar */}
          <div className="flex relative max-w-2xl justify-center lg:mx-20">
            {/* Magnifying Glass */}
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg
                className="fill-current pointer-events-none text-gray-600 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
            <input
              className="flex-1 border-2 border-gray-300 bg-white placeholder-gray-700 h-10 pl-10 pr-2 rounded-sm text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              value={input}
              onInput={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') createNewQuery(input);
              }}
            />
          </div>
        </div>
        {/* sm menu button (User Logo) */}
        <div>
          <button
            type="button"
            id="sidebar-open"
            className={
              'flex h-10 px-6 items-center text-gray-500 border-4 border-transparent hover:border-b-indigo-700' +
              (open ? ' border-b-indigo-700' : '')
            }
            onClick={() => setOpen(!open)}
            aria-label="Open site navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          {/* sm menu open */}
          {open && (
            <div className="absolute w-60 px-5 py-3 right-4 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent">
              <ul className="space-y-3 dark:text-white">
                {/* Account Li*/}
                <li className="font-medium">
                  <a
                    href="#"
                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                  >
                    <div className="mr-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    Account
                  </a>
                </li>
                {/* Setting Li*/}
                <li className="font-medium">
                  <a
                    href="#"
                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                  >
                    <div className="mr-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    Setting
                  </a>
                </li>
                {/* Divider*/}
                <hr className="dark:border-gray-700" />
                {/* Logout Li*/}
                <li className="font-medium">
                  <a
                    href="#"
                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                  >
                    <div className="mr-3 text-red-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </div>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  createNewQuery: PropTypes.func,
};
export default Header;
