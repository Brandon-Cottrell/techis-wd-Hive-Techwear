import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import BannerImage from "../assets/images/Banner.png";
import BannerMobileImage from "../assets/images/Banner-Mobile.png";
import CategoryImage001 from "../assets/images/category001.png";
import CategoryImage002 from "../assets/images/category002.png";
import CategoryImage003 from "../assets/images/category003.png";
import CategoryImage004 from "../assets/images/category004.png";
import OfferImage001 from "../assets/images/offer001.png";
import OfferImage002 from "../assets/images/offer002.png";
import OfferImage003 from "../assets/images/offer003.png";
import OfferImage004 from "../assets/images/offer004.png";
import Empty from "../components/default/Empty";
import CategoryCard from "../components/landing/CategoryCard";

export default function Landing() {
	const categories = [
		{
			id: 1,
			name: 'T-Shirts',
			image: CategoryImage001
		},
		{
			id: 2,
			name: 'Shirts',
			image: CategoryImage002
		},
		{
			id: 3,
			name: 'Jeans',
			image: CategoryImage003
		},
		{
			id: 4,
			name: 'Hats',
			image: CategoryImage004
		},
	]
	return (
		<>
			<Header />
			<section className="main-wrapper">
				<div className="banner">
					<img className="banner-image" src={BannerImage} alt="" />
					<img className="banner-image-mobile" src={BannerMobileImage} alt="" />
					<div className="banner-text">
						<p>Clothing Divine Getting</p>
						<p>Everyone's Favorite</p>
						<p>This Season's most - loved Styles</p>
					</div>
				</div>

				<div className="product-brand">
					<p>Get Up To 50% off </p>
					<p>On all products and brands</p>
					<div>
						<Link to="/sign-up">Shop Women's</Link>
						<Link to="/sign-up" data>Shop Men's</Link>
					</div>
				</div>
				<div className="landing-container">
					<div className="content-container">
						<p className="category-title">Categories</p>

						<div className="category">
							{ categories && categories.length > 0 
								? categories.map((c, index)=> <CategoryCard key={index} data={c} />)
								: <Empty />
							}
						</div>
					</div>
					<div className="content-container">
						<p className="category-title">Offers</p>
						<div className="offer">
							<div className="offer-items">
								<img className="offer-image" src={OfferImage001} alt="" />
								<div className="offer-text">
									<p>UP TO 25% OFF</p>
									<p>On all the T-Shirt brands</p>
								</div>
								<button className="offer-btn offer-001">GET NOW</button>
							</div>
							<div className="offer-items">
								<img className="offer-image" src={OfferImage002} alt="" />
								<div className="offer-text">
									<p>UP TO 35% OFF</p>
									<p>On all the Hat brands</p>
								</div>
								<button className="offer-btn offer-002">GET NOW</button>
							</div>
							<div className="offer-items">
								<img className="offer-image" src={OfferImage003} alt="" />
								<div className="offer-text">
									<p>UP TO 50% OFF</p>
									<p>On all the Bottom brands</p>
								</div>
								<button className="offer-btn offer-003">GET NOW</button>
							</div>
							<div className="offer-items">
								<img className="offer-image" src={OfferImage004} alt="" />
								<div className="offer-text">
									<p>UP TO 75% OFF</p>
									<p>On all the Shirt brands</p>
								</div>
								<button className="offer-btn offer-004">GET NOW</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
