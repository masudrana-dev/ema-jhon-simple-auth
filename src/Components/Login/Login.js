import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import google from '../../images/google.png'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebae.init';

const Login = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.Pathname || ' /shipment ';

    if (user) {
        navigate(from, { replace: true });
    }
    // if (user) {
    //     navigate('/shop');
    // }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" placeholder='Enter your password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value='Login' />
                </form>
                <p>
                    New to Ema jhon ? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <div className='or-style'>
                    <div className='left-bar'></div>Or<div className='right-bar'></div>
                </div>
                <button className='google-btn'><img src={google} alt="" width='30px' /> Continue with Google </button>
            </div>
        </div>
    );
};

export default Login;