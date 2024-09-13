import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MoreDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Navbarcomp from '../compenet/NavbarComp';

const MoreDetail = () => {
  const { productId, categoryId } = useParams(); // Get productId and categoryId from the URL params
  const navigate = useNavigate();
  const [category, setCategory] = useState(null); // To store category details
  const [error, setError] = useState(null); // To store any error messages
  const [quantity, setQuantity] = useState(1); // For handling quantity changes

  // Fetch the product and category data from the backend
  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        console.log(`Fetching details for Product ID: ${productId}, Category ID: ${categoryId}`);

        const response = await fetch(`/products/${productId}/categories/${categoryId}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch category');
        }

        const data = await response.json();
        console.log('Fetched category data:', data);
        setCategory(data); // Set the category data
      } catch (err) {
        console.error('Error:', err.message);
        setError(err.message || 'Failed to fetch category');
      }
    };

    fetchProductCategory();
  }, [productId, categoryId]); // Rerun effect when productId or categoryId changes

  // Handle error or loading state
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!category) {
    return <div>Loading...</div>; // Show loading indicator if data is not fetched yet
  }

  // Calculate total price based on quantity
  const price = parseFloat(category.Prix.replace('€', '').replace(',', '.')); // Convert price string to number
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <>
      <Navbarcomp />
      <div className="more-detail-page">
        <h1>
          Product Details
          <button className="back" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faLeftLong} /> Back
          </button>
        </h1>
        <div className="details-container">
          <table className="details-table">
            <thead>
              <tr>
                <th colSpan="2">Category Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="4">
                  <img src={category.Image} alt={category.nom} className="category-image" />
                </td>
                <td><strong>Product Name:</strong> {category.nom}</td>
              </tr>
              <tr>
                <td><strong>Description:</strong> {category.description}</td>
              </tr>
              <tr>
                <td><strong>Price:</strong> {category.Prix}</td>
              </tr>
              <tr>
                <td>
                  <div className="quantity-controls">
                    <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} disabled={quantity <= 1}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    <p className="total-price">Total: {totalPrice}€</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MoreDetail;
