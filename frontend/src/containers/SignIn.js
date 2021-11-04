import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import { getUser } from "../reducks/users/selectors";
import { signIn } from "../reducks/users/operations";

export default function SignIn() {
	const dispatch = useDispatch();
	let history = useHistory();
	const selector = useSelector((state) => state);
	const errors = getUser(selector).errors;

	const initialValues = {
		email: "",
		password: "",
	};

	const [values, setValues] = useState(initialValues);
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const onSubmitSignIn = () => {
		setIsLoading(true);
		dispatch(signIn(values, () => history.push("/")));
		setIsLoading(false);
	};
	return (
		<>
			<Header />
			<section className="main-wrapper">
				<div className="sign-in">
					<p className="title">SIGN IN</p>
					<div className="form-container">
						<label htmlFor="email">Email Address</label>
						<input
							className="custom-input"
							type="email"
							name="email"
							placeholder="Enter Email"
							value={values.email}
							onChange={handleInputChange}
						/>
						{errors.email ? <span className="error-text">{errors.email[0]}</span> : null}
						<label className="mt-2" htmlFor="email">
							Password
						</label>
						<input
							className="custom-input"
							type="password"
							name="password"
							placeholder="Enter Password"
							value={values.password}
							onChange={handleInputChange}
						/>
						{errors.password ? <span className="error-text">{errors.password[0]}</span> : null}
						<button className="custom-btn" onClick={onSubmitSignIn}>
							{isLoading ? "SIGNING IN..." : "SIGN IN"}
						</button>
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
