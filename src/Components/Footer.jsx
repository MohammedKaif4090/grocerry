import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-red-800 pt-10 pb-6 px-6 md:px-16 mt-12 shadow-inner">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Website Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">M.K Grocery Market</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for fresh groceries, dairy, snacks, and more. Enjoy freshness delivered to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@mkgrocery.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Main Street, Mumbai, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-400 mt-10 pt-4 text-center text-sm text-red-700">
        © {new Date().getFullYear()} M.K Grocery Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
