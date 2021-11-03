import React from 'react';

import Footer from '../components/default/Footer';
import Header from '../components/default/Header';

export default function Checkout() {
	return (
		<>
			<Header />
			<section className="main-wrapper">
                <div className="checkout">
                    <p className="title">My Items Detail</p>
                    <p>Please check your items and confirm it</p>
                    <div className="order-detail">
                        <div className="order-list">
                            <p>Adidas Shoe</p>
                            <p>3</p>
                            <p>$39.00</p>
                        </div>
                        <div className="order-list">
                            <p>Polo T-Shirt</p>
                            <p>4</p>
                            <p>$59.00</p>
                        </div>
                        <div className="order-list">
                            <p>Ten11 T-shirt</p>
                            <p>2</p>
                            <p>$29.00</p>
                        </div>
                    </div>
                    <hr className="checkout-line"/>
                    <div className="total-order">
                        <p>Total Price</p>
                        <p>9</p>
                        <p>$127.00</p>
                    </div>
                    <div className="checkout-form-container">
                        <label htmlFor="fullname">Full Name</label>
                        <input className="custom-input mb-3" type="text" placeholder="Enter Recipient's name"/>
                        <label htmlFor="email">Phone Number</label>
                        <input className="custom-input mb-3" type="text" placeholder="Enter Phone Number"/>
                        <label htmlFor="email">Street address or P.O. Box</label>
                        <input className="custom-input mb-3" type="text" placeholder="Enter Street address or P.O. Box"/>
                        <label htmlFor="email">PIN Code</label>
                        <input className="custom-input mb-3" type="text" placeholder="Enter PIN Code"/>
                        <label htmlFor="email">Apt, suite, unit, building, floor, etc.</label>
                        <input className="custom-input mb-3" type="text" placeholder="Enter Apt, suite, unit, building, floor, etc."/>
                        <label htmlFor="email">City</label>
                        <input className="custom-input mb-3" type="text" placeholder="Enter City"/>
                        <label htmlFor="email">State</label>
                        <input className="custom-input mb-3" type="text" placeholder="Enter State"/>
                        <button className="custom-btn">Confirm and submit</button>
                    </div>
                    
                </div>
            </section>
			<Footer />
		</>
	);
}
