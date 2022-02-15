import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';

const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex  items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
        <div className="container px-4 mx-auto flex  items-center justify-between">
          <Link to="/">
            <h1 className="text-lg text-white">STREAM YOUR DREAMS</h1>
          </Link>

          <div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <div className="space-y-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/show">Show</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/new">New</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/edit">Edit</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/delete">Delete</Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-end items-center">
          <Login />
        </div>
      </nav>
    </>
  );
};

export default Header;
