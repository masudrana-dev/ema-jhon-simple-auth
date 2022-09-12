import React from 'react';
import './Homepage.css'
import { Link } from 'react-router-dom';
const Homepage = () => {
    return (
        <div className='homapage-cotainer px-40 mt-20'>
            <div className="home-text">
                <p className='text-yellow-500 mb-5'><small>Sale upto 75% off</small></p>
                <h1 className='text-6xl font-mono'>New Collection For Fall</h1>
                <h4 className='text'>Discover all the new arrivals of ready-to-wear collection.</h4>
                <Link to='/shop'>
                    <button className='home-btn'>SHOP NOW</button>
                </Link>
            </div>
            <div className="home-img">
                <img src={"../fashion.png"} alt="" />
            </div>
        </div>
    );
};

export default Homepage;