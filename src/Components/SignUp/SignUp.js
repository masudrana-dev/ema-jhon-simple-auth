import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import google from '../../images/google.png'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebae.init';

const SignUp = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [confirmPassword, setConfirmPassword] = useState(' ');
    const [error, seterror] = useState(' ');
    const Navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        Navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            seterror("your password did not matched")
            return;
        }
        if (password.length < 6) {
            seterror('password must be  6 characters or no longer');
            return;
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" onBlur={handleEmailBlur} placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onBlur={handlePasswordBlur} placeholder='Enter your password' name='password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" onBlur={handleConfirmPasswordBlur} placeholder='Enter your password' name='confirm-password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value='Sign Up' />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className='or-style'>
                    <div className='left-bar'></div>Or<div className='right-bar'></div>
                </div>
                <button className='google-btn'><img src={google} alt="" width='30px' /> Continue with Google </button>
            </div>
        </div>
    );
};

export default SignUp;