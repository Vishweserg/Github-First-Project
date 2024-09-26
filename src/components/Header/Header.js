import React from 'react';
import './Header.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://flipkart.websites.co.in/files/57089/business/logo/logo-944289543.jpeg?v=1487644817"
          alt="Flipkart"
        />
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for products, brands and more"
        />
        <FaSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <FaUser className="header__optionIcon" />
          <span className="header__optionLineOne">Login</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">More</span>
        </div>

        <div className="header__optionCart">
          <FaShoppingCart className="header__optionIcon" />
          <span className="header__optionLineOne">Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
