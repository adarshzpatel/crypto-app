import React from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { to: "/", text: "Home", icon: "" },
  { to: "/cryptocurrencies", text: "Cryptocurrencies", icon: "" },
  { to: "/exchanges", text: "Exchanges", icon: "" },
  { to: "/news", text: "News", icon: "" },
];

const Nav = () => {
  return (
    <header className="p-8 bg-gray-200 min-w-max">
      <nav>
        {/* Logo */}
        <div className="text-2xl font-bold mb-6 text-center text-gray-800">
          <Link to="/">CrpytoLand</Link>
        </div>
        {/* Menu */}
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              exact
              className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300"
              activeClassName=" bg-gray-300 rounded-md font-semibold text-gray-900"
              key={item.text}
              to={item.to}
            >
              {item.text}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
