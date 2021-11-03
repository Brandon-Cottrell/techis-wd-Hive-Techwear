import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";

export default function SignIn() {
	return (
		<>
			<Header />
			<section className="main-wrapper">
				<div className="sign-in">
					<p className="title">SIGN IN</p>
					<div className="form-container">
						<label htmlFor="email">Email Address</label>
						<input className="custom-input" type="email" placeholder="Enter Email" />
						<label className="mt-2" htmlFor="email">
							Password
						</label>
						<input className="custom-input" type="password" placeholder="Enter Password" />
						<button className="custom-btn">SIGN IN</button>
						<p>
							New Customer ? <Link to="/sign-up">Register</Link>
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
