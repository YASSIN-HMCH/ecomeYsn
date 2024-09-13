import React, { useEffect, useState } from "react";
import Navbarcomp from "../compenet/NavbarComp";
import './info.css';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

function Info() {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Get the product id from the URL params

    // Fetch data from the backend when the component mounts
    useEffect(() => {
        fetch(`/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data); // Store individual product data in state
            })
            .catch(err => console.error("Error fetching data:", err)); // Error handling
    }, [id]); // Add id as a dependency to refetch when it changes

    if (!product) {
        return <p>Loading...</p>; // Handle loading state
    }

    return (
        <>
            <Navbarcomp />
            <div className="info-page">
                <h1>
                    Product
                    <Link to="/">
                        <button className="back">
                            <FontAwesomeIcon icon={faLeftLong} /> Back
                        </button>
                    </Link>
                </h1>
                <div>
                    {/* Display categories if they exist */}
                    {product.categorie && Array.isArray(product.categorie) && (
                        <div className="categories">
                            <div className="rows">
                                {product.categorie.map((item, index) => (
                                    <div key={index} className="col-md-4 col-sm-6 col-lg-3">
                                        <div className="cards">
                                            <img src={item.Image} alt={item.nom} className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.nom}</h5>
                                                <p className="card-text"><strong>Price:</strong> {item.Prix}</p>

                                                {/* Use the fetched product.id (from API) for productId */}
                                                <Link to={`/products/${product.id}/categories/${item.id}`}>
                                                <button className="buy-btn-card">Buy Now</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Info;
