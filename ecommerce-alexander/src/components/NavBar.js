import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import CartWidget from "./CartWidget";
const Navbar = () => {
    return (
        <div className="navbar-m" id="navbarNav">
            <h1 className="title">ECommerce</h1>
            <Nav.Link className="link" href="/">Home</Nav.Link>

            <Nav.Link className="link" href="/products">Products</Nav.Link>

            <Nav.Link className="link" href="/about-us">About Us</Nav.Link>
            <CartWidget></CartWidget>

        </div>
    );
};

export default Navbar;