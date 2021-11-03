import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";

export default function SignUp() {
	return (
		<>
			<Header />
			<section className="main-wrapper">
				<div className="sign-up">
					<p className="title">SIGN UP</p>
					<div className="form-container">
						<label htmlFor="email">Name</label>
						<input className="custom-input" type="text" placeholder="Enter Name"/>
						<label htmlFor="email">Email Address</label>
						<input className="custom-input" type="email" placeholder="Enter Email"/>
						<label className="mt-2" htmlFor="email">Password</label>
						<input className="custom-input" type="password" placeholder="Enter Password"/>
						<label className="mt-2" htmlFor="email">Confirm Password</label>
						<input className="custom-input" type="password" placeholder="Enter Confirm Password"/>
						<button className="custom-btn">SIGN UP</button>
						<p>Have an account ? <Link to="/sign-in">Sign In</Link></p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
