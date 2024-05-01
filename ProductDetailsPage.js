import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/api';

function ProductDetailsPage() {
  const { productId } = useParams();
  const product = getProductById(productId);

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <p>Name: {product.name}</p>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}</p>
        <p>Availability: {product.availability}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
