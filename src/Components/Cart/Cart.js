import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;

    for (const Product of cart) {
        total = total + Product.price;
        shipping = shipping + Product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + (tax);
    return (
        <div className='cart'>
            <h1>Order Summary </h1>
            <h3>Selected items:{cart.length}</h3>
            <p> Total Price :${total}</p>
            <p> Total Shipping :${shipping}</p>
            <p> Tax : {tax}</p>
            <h4>Grand Total : {grandTotal}</h4>
            {props.children}
        </div>
    );
};

export default Cart;