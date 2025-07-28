import React from 'react';

const ProductDisplay = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-10 px-4">
      <div className="bg-white w-full sm:max-w-lg lg:max-w-4xl rounded-2xl shadow-2xl p-4 sm:p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 font-bold text-2xl hover:text-red-700"
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-72 flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">{product.title}</h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base hidden sm:block">
              {product.description}
            </p>
            <div className="mt-3 font-bold text-lg text-green-700">₹{product.price}</div>
            <div className="mt-4 flex justify-center lg:justify-start items-center gap-3">
              <button className="bg-gray-200 px-3 py-1 rounded text-xl">-</button>
              <span className="text-lg">1</span>
              <button className="bg-gray-200 px-3 py-1 rounded text-xl">+</button>
            </div>
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded shadow w-full sm:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
