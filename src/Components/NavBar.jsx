import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../assets/Beige Brown Playful Grocery Market Logo (1).png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/search/${trimmedQuery}`);
      setSearchQuery('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 shadow-[0_4px_12px_rgba(245,245,220,0.8)]">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-52 h-24" />
        </div>
      </Link>

      {/* Menu + Search */}
      <ul className="hidden md:flex gap-8 text-yellow-500 font-semibold text-xl items-center">
        <li>
          <Link to="/" className="text-white hover:border-b-2 border-yellow-400 pb-1">
            Home
          </Link>
        </li>
        <li className="flex">
          <input
            className="border border-yellow-500 rounded-s-lg py-2 w-[600px] px-4"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="bg-[#FFD95A] text-black px-4 py-2 border border-yellow-500 rounded-e-lg font-semibold flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </li>
      </ul>

      {/* Cart + Sign Up */}
      <div className="flex items-center gap-4">
        <FaShoppingCart className="text-2xl " />
        <button className="bg-[#FFD95A] text-black px-4 py-2 rounded-full font-semibold">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
