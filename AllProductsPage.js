import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import Pagination from './Pagination';
import { getAllProducts } from '../data/api';

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); // Number of products per page

  useEffect(() => {
    // Fetch products when component mounts
    getAllProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  // Filtering and pagination logic here

  return (
    <div>
      <h1>All Products</h1>
      <Filters products={products} setFilteredProducts={setFilteredProducts} />
      <div className="product-grid">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={setCurrentPage}
      />
    </div>
  );
}

export default AllProductsPage;
