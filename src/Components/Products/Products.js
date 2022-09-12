import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = ({ product, handleAddToCart }) => {
    // const {product , handleAddToCart } =props
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product '>
            <img src={img} alt="" />
            <div className="product-info">
                <div className="product-name">
                    <h6>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Manufacturer : {seller}</p>
                    <p>Ratings : {ratings}</p>
                </div>
            </div>
            <button className='button' onClick={() => handleAddToCart(product)}>
                <p>Add to cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;