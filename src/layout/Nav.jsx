import React, { Fragment } from "react";

import { NavLink, Link } from "react-router-dom";
import {
  HomeIcon,
  TrendingUpIcon,
  NewspaperIcon,
  ScaleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/outline";

import { Popover, Transition } from "@headlessui/react";
const navItems = [
  { to: "/", text: "Home", icon: HomeIcon },
  { to: "/cryptocurrencies", text: "Cryptocurrencies", icon: TrendingUpIcon },
  { to: "/exchanges", text: "Exchanges", icon: ScaleIcon },
  { to: "/news", text: "News", icon: NewspaperIcon },
];

const Nav = () => {
  console.log(window.innerWidth);
  return (
    <>
      {/* desktop navbar */}
      {/* Logo */}
      <div className='shadow-xl border-b backdrop-filter backdrop-blur'>

      <div className="p-4 lg:p-8 flex flex-col gap-4 ">
        <Popover>
        {({ open }) => (
          <>
        <div className="flex items-center justify-between ">
          {/* Logo */}

          <div className="flex text-blue-700 items-center  justify-center gap-2 text-2xl font-bold xl:text-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-current"
              >
              <path d="M2.76 20.2a2.73 2.73 0 0 0 2.15.85 8.86 8.86 0 0 0 3.37-.86 9 9 0 0 0 12.27-10.9c1.31-2.23 1.75-4.26.67-5.48a2.94 2.94 0 0 0-2.57-1A5 5 0 0 0 16.1 4 9 9 0 0 0 3.58 15.14c-1.06 1.21-2.05 3.68-.82 5.06zm1.5-1.32c-.22-.25 0-1.07.37-1.76a9.26 9.26 0 0 0 1.57 1.74c-1.03.3-1.71.28-1.94.02zm14.51-5.17A7 7 0 0 1 15.58 18 7.12 7.12 0 0 1 12 19a6.44 6.44 0 0 1-1.24-.13 30.73 30.73 0 0 0 4.42-3.29 31.5 31.5 0 0 0 3.8-4 6.88 6.88 0 0 1-.21 2.13zm.09-8.89a.94.94 0 0 1 .87.32c.23.26.16.94-.26 1.93a9.2 9.2 0 0 0-1.61-1.86 2.48 2.48 0 0 1 1-.39zM5.22 10.31A6.94 6.94 0 0 1 8.41 6 7 7 0 0 1 12 5a6.9 6.9 0 0 1 6 3.41 5.19 5.19 0 0 1 .35.66 27.43 27.43 0 0 1-4.49 5A27.35 27.35 0 0 1 8.35 18a7 7 0 0 1-3.13-7.65z"></path>
            </svg>
            <Link to="/">CryptoLand</Link>
          </div>
                <Popover.Button>

          {!open?<MenuIcon role="button" className="h-8 w-8 lg:hidden focus:outline-none" />:<XIcon role="button" className="h-8 w-8 lg:hidden focus:outline-none" />}
      </Popover.Button>
        </div>
        <Transition
                  as={Fragment}
                  enter="transition-all transform ease-in-out duration-200"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-all ease-in-out transform duration-100"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                >

        <Popover.Panel>
          
        <div className="flex flex-col pt-4 gap-1">
          {navItems.map((item) => (
            <NavLink
            exact
            className="flex gap-2 items-center px-4 py-2 text-gray-700 rounded-md hover:bg-blue-50"
            activeClassName=" rounded-md font-semibold text-blue-600 bg-blue-50"
            key={item.text}
            to={item.to}
            >
              <item.icon className="h-6 w-6 hidden xl:block" />
              {item.text}
            </NavLink>
          ))}
        </div>
          </Popover.Panel>
          </Transition>
          </>
          )}
          </Popover>
          <div className=" hidden lg:flex flex-col pt-4 gap-1">
          {navItems.map((item) => (
            <NavLink
            exact
            className="flex gap-2 items-center px-4 py-2 text-gray-700 rounded-md hover:bg-blue-50"
            activeClassName=" rounded-md font-semibold text-blue-600 bg-blue-50"
            key={item.text}
            to={item.to}
            >
              <item.icon className="h-6 w-6 hidden xl:block" />
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
          </div>
    </>
  );
};

export default Nav;
