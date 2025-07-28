import React from 'react';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import CategoryPage from './Components/CategoryPage';
import ProductDisplay from './Components/ProductDisplay';
import SearchResults from './Components/SearchResult';
const App = () => {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDisplay />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
