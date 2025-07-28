import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../assets/data';
import ProductCard from './ProductCard';
import { useState } from 'react';
import ProductDisplay from './ProductDisplay';

const SearchResults = () => {
  const { query } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Case-insensitive filter by title or category
  const filteredProducts = ProductData.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-4 text-yellow-700">
        Search Results for "{query}"
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductDisplay
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default SearchResults;