import React from 'react';

import CartImage001 from '../assets/images/cart001.png';
import CartImage002 from '../assets/images/cart002.png';
import CartImage003 from '../assets/images/cart003.png';
import CartImage004 from '../assets/images/cart004.png';
import CartImage005 from '../assets/images/cart005.png';
import Footer from '../components/default/Footer';
import Header from '../components/default/Header';

export default function Cart() {
	return (
		<>
			<Header />
			<section className="main-wrapper">
                <div className="cart">
                    <p className="title">My Cart(s)</p>
                    <div className="cart-container">
                        <div className="cart-card">
                            <img className="cart-image" src={CartImage001} alt="cart-item"/>
                            <div className="cart-content">
                                <p className="cart-title">Adidas Yeezy</p>
                                <p className="cart-description">Adidas originals women style</p>
                            </div>
                            <div className="price-content">
                                <p className="cart-price">$1500</p>
                                <div className="added-cart">
                                    <span> - </span>
                                    <span className="margin-top-4"> 2 </span>
                                    <span className="margin-top-4"> + </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-card">
                            <img className="cart-image" src={CartImage002} alt="cart-item"/>
                            <div className="cart-content">
                                <p className="cart-title">Adidas Yeezy</p>
                                <p className="cart-description">Adidas originals women style</p>
                            </div>
                            <div className="price-content">
                                <p className="cart-price">$1500</p>
                                <div className="added-cart">
                                    <span> - </span>
                                    <span className="margin-top-4"> 2 </span>
                                    <span className="margin-top-4"> + </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-card">
                            <img className="cart-image" src={CartImage003} alt="cart-item"/>
                            <div className="cart-content">
                                <p className="cart-title">Adidas Yeezy</p>
                                <p className="cart-description">Adidas originals women style</p>
                            </div>
                            <div className="price-content">
                                <p className="cart-price">$1500</p>
                                <div className="added-cart">
                                    <span> - </span>
                                    <span className="margin-top-4"> 2 </span>
                                    <span className="margin-top-4"> + </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-card">
                            <img className="cart-image" src={CartImage004} alt="cart-item"/>
                            <div className="cart-content">
                                <p className="cart-title">Adidas Yeezy</p>
                                <p className="cart-description">Adidas originals women style</p>
                            </div>
                            <div className="price-content">
                                <p className="cart-price">$1500</p>
                                <div className="added-cart">
                                    <span> - </span>
                                    <span className="margin-top-4"> 2 </span>
                                    <span className="margin-top-4"> + </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-card">
                            <img className="cart-image" src={CartImage005} alt="cart-item"/>
                            <div className="cart-content">
                                <p className="cart-title">Adidas Yeezy</p>
                                <p className="cart-description">Adidas originals women style</p>
                            </div>
                            <div className="price-content">
                                <p className="cart-price">$1500</p>
                                <div className="added-cart">
                                    <span> - </span>
                                    <span className="margin-top-4"> 2 </span>
                                    <span className="margin-top-4"> + </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="cart-line"/>
                    <div className="total-cart">
                        <div>
                            <div className="sub-total">
                                <p>SUBTOTAL:</p>
                                <p>$ 3050</p>
                            </div>
                            <div className="total-item">
                                <p>ITEM(S):</p>
                                <p>5</p>
                            </div>
                            <button className="proceed-checkout">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
			<Footer />
		</>
	);
}
