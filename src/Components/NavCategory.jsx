import React from 'react';
import { useNavigate } from 'react-router-dom';
import snacks from '../assets/colddrink.png';
import diary from '../assets/Untitled design (1).png';
import Tea from '../assets/tea.png';
import dairy from '../assets/dairies.png';
import Sauce from '../assets/sauce.png';

const categories = [
  { name: 'Snacks & Drinks', image: snacks },
  { name: 'Chocolate & Ice Cream', image: diary },
  { name: 'Tea & Coffee', image: Tea },
  { name: 'Milk & Bread', image: dairy },
  { name: 'Sauce & Spreads', image: Sauce }
];

const NavCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-6 bg-white">
      <div className="flex  gap-3 overflow-x-auto scrollbar-hide justify-around">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${encodeURIComponent(category.name)}`)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 overflow-hidden hover:border-yellow-500 transition-all duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-center font-medium text-red-700 group-hover:text-yellow-600 transition">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavCategory;
