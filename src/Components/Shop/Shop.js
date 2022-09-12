import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProduct from '../Hooks/useProducts';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 pt-10">
                {
                    products.map(product => <Products key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-10">
                            Review Orders
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;