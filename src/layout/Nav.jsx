import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        {/* Logo */}
        <div className="">
          <Link to="/">CrpytoLand</Link>
        </div>
        {/* Menu */}
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cryptocurrencies'>Cryptocurrencies</Link></li>
                <li><Link to='/exchanges'>Exchanges</Link></li>
                <li><Link to='/news'>News</Link></li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
