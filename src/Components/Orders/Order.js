import React from 'react';
import useCart from '../Hooks/useCart';
import useProduct from '../Hooks/useProducts';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';


const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products)


    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='review-item-container font-5xl'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>

                    <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-10">
                        Proceed to Checkout
                    </button>

                </Cart>
            </div>
        </div>
    );
};
export default Order;