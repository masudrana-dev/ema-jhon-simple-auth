import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebae.init'

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState(' ');
    const [name, setName] = useState(' ');
    const [address, setAddress] = useState(' ');
    const [phone, setPhone] = useState(' ');
    const [error, setError] = useState(' ');

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone }
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleCreateUser} >
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" onBlur={handleNameBlur} placeholder='Enter your name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={user?.email} readOnly placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" onBlur={handleAddressBlur} placeholder='Enter your Address' name='address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" onBlur={handlePhoneBlur} placeholder='Enter your number' name='phone' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value='Sign Up' />
                </form>
            </div>
        </div>
    );
};

export default Shipment;