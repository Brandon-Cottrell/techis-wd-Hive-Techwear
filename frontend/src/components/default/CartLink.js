import React from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../../assets/images/cart.png';

export default function CartLink() {
	return (
		<li>
            <Link className="menu__item" to="/">
                <img className="cart-icon" src={CartIcon} alt="cart-icon" /><span className="cart-text">Cart</span> 
                <div className="cart-number"><span>5</span></div>
            </Link>
        </li>
	);
}
