import React, { useState } from 'react';
import Banner from './Banner';
import Product from '../assets/data';
import NavCategory from './NavCategory';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';

const getRandomProducts = (productArray, count = 6) => {
  const shuffled = [...productArray].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  const snacks = Product.filter(item => item.category === 'Snacks & Drinks');
  const dairy = Product.filter(item => item.category === 'Milk & Bread');
  const chocolate = Product.filter(item => item.category === 'Chocolate & Ice Cream');
  const tea = Product.filter(item => item.category === 'Tea & Coffee');
  const sauce = Product.filter(item => item.category === 'Sauce & Spreads');

  const randomSnacks = getRandomProducts(snacks, 6);
  const randomDairy = getRandomProducts(dairy, 6);
  const randomChocolate = getRandomProducts(chocolate, 6);
  const randomTea = getRandomProducts(tea, 6);
  const randomSauce = getRandomProducts(sauce, 6);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Banner */}
      <Banner />

      {/* Navigation Categories */}
      <NavCategory />

      {/* Category Sections */}
      <CategorySection title="Top Picks in Snacks & Drinks" link="Snacks & Drinks" items={randomSnacks} openProduct={openProduct} />
      <CategorySection title="Milk & Bread Essentials" link="Milk & Bread" items={randomDairy} openProduct={openProduct} />
      <CategorySection title="Chocolates & Ice Cream Delights" link="Chocolate & Ice Cream" items={randomChocolate} openProduct={openProduct} />
      <CategorySection title="Tea & Coffee Collection" link="Tea & Coffee" items={randomTea} openProduct={openProduct} />
      <CategorySection title="Sauce & Spreads" link="Sauce & Spreads" items={randomSauce} openProduct={openProduct} />

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50">
          <ProductDisplay product={selectedProduct} onClose={closeProduct} />
        </div>
      )}
    </div>
  );
};

// Reusable category section component
const CategorySection = ({ title, link, items, openProduct }) => (
  <section className="px-4 py-2">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <Link to={`/category/${link}`} className="text-blue-600 text-sm hover:underline">
        View All
      </Link>
    </div>
    <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide ">
      {items.map((item) => (
        <div
          key={item.id || item.title}
          onClick={() => openProduct(item)}
          className="cursor-pointer z-0 w-[80vw] sm:w-[300px]"
        >
          <ProductCard
            image={item.image}
            title={item.title}
            price={item.price}
            className="w-[300px] sm:w-[250px] xs:w-[150px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Home;
