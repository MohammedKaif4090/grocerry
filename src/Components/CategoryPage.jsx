import React, { useState } from 'react';
import Product from '../assets/data';
import ProductDisplay from './ProductDisplay';
import ProductCard from './ProductCard';
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

const CategoryPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Snacks & Drinks'); // default category

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  // Filter products by selected category
  const filteredProducts = Product.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="relative">
      {/* Category Bar */}
      <div className="px-4 py-6 bg-white z-0">
        <div className="flex  gap-3 overflow-x-auto scrollbar-hide justify-around">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center cursor-pointer group ${
                selectedCategory === category.name ? 'scale-105' : ''
              } transition`}
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden hover:border-yellow-500 transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <p className="mt-1 text-sm sm:text-base md:text-lg text-center font-medium text-red-700 text-shadow-lg group-hover:text-yellow-600">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center px-4 pb-8 z-0 mx-0 sm:mx-28">
        {filteredProducts.map((item) => (
          <div
            key={item.id || item.title}
            onClick={() => openProduct(item)}
            className="cursor-pointer z-0"
          >
            <ProductCard
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-10">
          <ProductDisplay product={selectedProduct} onClose={closeProduct} />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
