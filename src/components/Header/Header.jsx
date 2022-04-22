import {useState} from 'react';
import logo from './logo.png';
import PropTypes from 'prop-types';

const Header = ({createNewQuery}) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="flex fixed z-10 top-0 h-12 w-full items-center justify-center wire bg-white">
      <div className="pl-4">
        <img className="h-8" src={logo} alt="Logo" />
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
        {/* sm menu open (User Logo) */}
        <button
          type="button"
          id="sidebar-open"
          className={
            'flex px-6 items-center text-gray-500 focus:outline-none focus:text-gray-700' +
            (open ? ' border border-gray-400' : '')
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
      </div>
    </div>
  );
};

Header.propTypes = {
  createNewQuery: PropTypes.func,
};
export default Header;
