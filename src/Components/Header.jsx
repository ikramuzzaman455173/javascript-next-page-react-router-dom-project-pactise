import { Bars3BottomRightIcon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 sticky top-0 z-10 lg:px-8'>
      <div className="relative flex items-center justify-between">
        {/* ====Logo Sectiong===== */}
        <Link to='/' className='inline-flex items-center'>
          <BoltIcon className='w-6 h-6 active' />
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextpage</span>
        </Link>
        {/* ====Nav Item Section===== */}
        <ul className='items-center hidden space-x-8 lg:flex font-bold'>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/books" className={({ isActive }) => isActive ? 'active' : ''}>Books</NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
          </li>
        </ul>
        {/* ====Mobile NavBar Section===== */}
        <div className="lg:hidden">
          {/* ====dropDownMenu Open Button===== */}
          <button onClick={() => setIsMenuOpen(true)} aria-label='open-menu' title="Open Menu">
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {/* ====dropDown Menu Visible Part Start===== */}
          {isMenuOpen && (<div className='absolute top-0 left-0 w-full z-10'>
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* ====Logo & Button Section===== */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='w-6 h-6 active' />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>nextpage</span>
                  </Link>
                </div>
                {/* ====DropDown Menu Close Button===== */}
                <div>
                  <button aria-label='Close Menu' title='Close Menu' onClick={() => setIsMenuOpen(false)}>
                    <XMarkIcon className='w-5 text-gray-600' />
                  </button>
                </div>
                {/* ====comment===== */}
              </div>
              <nav>
                {/* ====Nav Item Section===== */}
                <ul className='items-center font-bold'>
                  <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                  </li>

                  <li>
                    <NavLink to="/books" className={({ isActive }) => isActive ? 'active' : ''}>Books</NavLink>
                  </li>

                  <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>)}




        </div>
      </div>
    </div>
  );
};

export default Header;