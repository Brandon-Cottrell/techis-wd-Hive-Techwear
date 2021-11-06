import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Empty from "../components/default/Empty";

import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import OrderListCard from "../components/order/OrderListCard";
import { checkoutOrder } from "../reducks/order/operations";
import { getUser } from "../reducks/users/selectors";

export default function Checkout() {
	const selector = useSelector((state) => state);
	const dispatch = useDispatch();
	const user = getUser(selector);
	const history = useHistory();
	const { carts } = history.location.state;
	const [isLoading, setIsLoading] = useState(false);

	const order_items = carts.results.map((cart) => {
		return {
			qty: cart.quantity,
			product: cart.product.id,
		};
	});

	const initialValues = {
		customer_name: user.name,
		customer_phone: "",
		address: "",
		pin_code: "",
		building_type: "",
		city: "",
		state: "",
	};
	const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const onSubmitCheckout = () => {
		setIsLoading(true);
		dispatch(
			checkoutOrder(
				{ ...values, total_price: carts.totalPrice, total_qty: carts.totalCartItems, order_items },
				() => history.push("/thank-you")
			)
		);
		setIsLoading(false);
	};

	return (
		<>
			<Header totalCart={carts.totalCart} />
			<section className="main-wrapper">
				<div className="checkout">
					<p className="title">My Items Detail</p>
					<p>Please check your items and confirm it</p>
					<div className="order-detail">
						{carts.results && carts.results.length > 0 ? (
							carts.results.map((cart) => <OrderListCard key={cart.id} orderItem={cart} />)
						) : (
							<Empty />
						)}
					</div>
					<hr className="checkout-line" />
					<div className="total-order">
						<p>Total Price</p>
						<p>{carts.totalCartItems}</p>
						<p>${carts.totalPrice}</p>
					</div>
					<div className="checkout-form-container">
						<label htmlFor="fullName">Full Name</label>
						<input
							onChange={handleInputChange}
							value={values.customer_name}
							name="customer_name"
							className="custom-input mb-3"
							type="text"
							placeholder="Enter Recipient's name"
						/>
						<label htmlFor="email">Phone Number</label>
						<input
							onChange={handleInputChange}
							value={values.customer_phone}
							name="customer_phone"
							className="custom-input mb-3"
							type="text"
							placeholder="Enter Phone Number"
						/>
						<label htmlFor="email">Street address or P.O. Box</label>
						<input
							onChange={handleInputChange}
							value={values.address}
							name="address"
							className="custom-input mb-3"
							type="text"
							placeholder="Enter Street address or P.O. Box"
						/>
						<label htmlFor="email">PIN Code</label>
						<input
							onChange={handleInputChange}
							value={values.pin_code}
							name="pin_code"
							className="custom-input mb-3"
							type="text"
							placeholder="Enter PIN Code"
						/>
						<label htmlFor="email">Apt, suite, unit, building, floor, etc.</label>
						<input
							onChange={handleInputChange}
							value={values.building_type}
							name="building_type"
							className="custom-input mb-3"
							type="text"
							placeholder="Enter Apt, suite, unit, building, floor, etc."
						/>
						<label htmlFor="email">City</label>
						<input
							onChange={handleInputChange}
							value={values.city}
							name="city"
							className="custom-input mb-3"
							type="text"
							placeholder="Enter City"
						/>
						<label htmlFor="email">State</label>
						<input
							onChange={handleInputChange}
							value={values.state}
							name="state"
							className="custom-input mb-3"
							type="text"
							placeholder="Enter State"
						/>
						<button onClick={onSubmitCheckout} className="custom-btn">
							{isLoading ? "Submitting the order..." : "Confirm and submit"}
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
