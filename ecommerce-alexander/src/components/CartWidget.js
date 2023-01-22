import React from 'react';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './CartWidget.css';
const CartWidget = () => {
    return (
        <div className="cart">
            <FontAwesomeIcon className="icon" size="1x" icon={faCartShopping} color="white"/>
            <div className="cart-font">20</div>
        </div>

    );
};

export default CartWidget;