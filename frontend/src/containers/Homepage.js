import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import ProductImage001 from "../assets/images/women001.png";
import ProductImage002 from "../assets/images/women002.png";
import ProductImage003 from "../assets/images/women003.png";
import ProductImage004 from "../assets/images/women004.png";
import ProductImage005 from "../assets/images/women005.png";
import ProductImage006 from "../assets/images/women006.png";
import ProductImage007 from "../assets/images/women007.png";
import ProductImage008 from "../assets/images/women008.png";
import ProductImage009 from "../assets/images/women009.png";

export default function Homepage() {
	return (
		<>
			<Header />
			<section className="main-wrapper">
                <div className="homepage">
                    <div className="homepage-container">
                        <div className="homepage-content">
                            <select className="gender-select">
                                <option value="">FILTER BY GENDER</option>
                                <option value="Men's">Men's</option>
                                <option value="Women's">Women's</option>
                            </select>

                            <div className="right-border">
                                <p className="homepage-category-text">Category Lists</p>
                                <div className="category-list">
                                    <Link to="#">Shirts</Link>
                                    <Link to="#">Bottoms</Link>
                                    <Link to="#">Hats</Link>
                                </div>
                            </div>
                        </div>
                        <div className="homepage-content">
                            <div className="homepage-title">Women's</div>
                            <div className="product-container">
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage001} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                        {/* <div className="added-cart">
                                            <span> - </span>
                                            <span className="margin-top-4"> 2 </span>
                                            <span className="margin-top-4"> + </span>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage002} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage003} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage004} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage005} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage006} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage007} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage008} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                                <div className="product-card">
                                    <img className="product-image" src={ProductImage009} alt=""/>
                                    <div className="product-content">
                                        <p className="product-title">Adidas Yeezy</p>
                                        <p className="product-description">Adidas originals women style</p>
                                    </div>
                                    <div className="price-content">
                                        <p className="product-price">$1500</p>
                                        <button className="add-cart-btn">Add +</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-pagination">
                        <div className="active"><Link to="#">1</Link></div>
                        <div><Link to="#">2</Link></div>
                        <div><Link to="#">3</Link></div>
                        <div><Link to="#">...</Link></div>
                        <div><Link to="#">8</Link></div>
                    </div>
                </div>
            </section>
			<Footer />
		</>
	);
}
