import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import CartWidget from "./CartWidget";
const Navbar = () => {
    return (
        <div className="navbar-m" id="navbarNav">
            <h1 className="title">DecoShop</h1>
            <Nav.Link className="link" href="/home">Hogar Deco</Nav.Link>

            <Nav.Link className="link" href="/exterior">Exteriores</Nav.Link>

            <Nav.Link className="link" href="/garden">Jardin</Nav.Link>
            <CartWidget></CartWidget>

        </div>
    );
};

export default Navbar;