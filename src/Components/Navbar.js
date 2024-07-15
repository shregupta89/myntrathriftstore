
import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar">
            <img src='/myntralogo.png' alt="Logo" className="logo" />
            <div className="menu">
                <a href="#men">MEN</a>
                <a href="#women">WOMEN</a>
                <a href="#kids">KIDS</a>
                <a href="#home-living">HOME & LIVING</a>
                <a href="#beauty">BEAUTY</a>
                <a href="#thrift" className="new">MYNTRA <span>THRIFT</span></a>
            </div>
            <div className="search">
                <input type="text" placeholder="Search for products, brands and more" />
            </div>
            <div className="icons">
                <a href="#profile">Profile</a>
                <a href="#wishlist">Wishlist</a>
                <a href="#bag">Bag <span className="bag-count">2</span></a>
            </div>
        </div>
    );
};

export default Navbar;
