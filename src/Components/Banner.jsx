import React from 'react';
import basket from '../assets/Mix-Fruits-Basket-PNG-Photos.png';

const Banner = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-100 to-amber-200 overflow-hidden px-4 shadow-inner  flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">

      {/* Text Section */}
      <div
        style={{ fontFamily: "'Ancizar Sans'" }}
        className="text-left z-10 w-full md:w-1/2 space-y-4 md:space-y-6"
      >
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-800 leading-tight drop-shadow-md text-center md:text-left">
          Are You Hungry?
          <span className="block text-red-500 mt-2">Get the Freshest Food!</span>
        </h1>

        {/* Paragraph Hidden on small screens */}
        <p className="hidden md:block text-base md:text-lg lg:text-xl text-red-700 font-medium tracking-wide">
          Discover delicious groceries, fruits, and essentials delivered to your doorstep.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-3 bg-white text-red-500 font-semibold rounded-full border border-red-400 hover:bg-red-100 transition-all duration-300 shadow-lg mb-2.5">
            Buy Now <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center z-10">
        {/* Background Glow Circle */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#f5c798] rounded-full opacity-60 blur-3xl animate-pulse z-0" />

        {/* White glow behind image */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 rounded-full z-0"
          style={{
            backgroundColor: 'white',
            filter: 'blur(80px)',
            opacity: 0.4,
          }}
        />

        {/* Image */}
        <img
          src={basket}
          alt="Fruit Basket"
          className="relative z-10 w-48 sm:w-64 md:w-72 lg:w-[400px] h-auto object-contain animate-bounce-slow"
        />
      </div>
    </div>
  );
};

export default Banner;
