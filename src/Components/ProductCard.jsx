import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

const ProductCard = ({ image, title, price, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className=" relative w-[160px] sm:w-[300px] bg-white rounded-2xl shadow-2xl p-4 text-center overflow-visible transition-all duration-300 group"
    >
      {/* Ribbon Style Price */}
      <div className="ribbon-3d-wave text-sm sm:text-xs">₹{price}</div>

      {/* Product Image */}
      <div className="h-40 sm:h-36 xs:h-28 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain transition-transform duration-300 group-hover:-translate-y-2"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <h3 className="text-lg sm:text-base xs:text-sm font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm sm:text-xs xs:text-[11px] text-gray-500 mt-1 line-clamp-1">
          {description}
        </p>
      </div>

      {/* Cart Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-3 right-3 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg z-20"
        aria-label="Add to cart"
      >
        <FaShoppingCart size={18} />
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
