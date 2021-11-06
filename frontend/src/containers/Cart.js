import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import CartCard from "../components/cart/CartCard";
import Empty from "../components/default/Empty";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import { fetchCarts } from "../reducks/cart/operations";
import { getCarts } from "../reducks/cart/selectors";

export default function Cart() {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	const carts = getCarts(selector);
	const history = useHistory();

	useEffect(() => {
		dispatch(fetchCarts());
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<Header totalCart={carts.totalCart} />
			<section className="main-wrapper">
				<div className="cart">
					<p className="title">My Cart(s)</p>
					<div className="cart-container">
						{carts.results && carts.results.length > 0 ? (
							carts.results.map((cart) => <CartCard key={cart.id} cart={cart} />)
						) : (
							<Empty />
						)}
					</div>
					<hr className="cart-line" />
					<div className="total-cart">
						<div>
							<div className="sub-total">
								<p>SUBTOTAL:</p>
								<p>$ {carts.totalPrice}</p>
							</div>
							<div className="total-item">
								<p>ITEM(S):</p>
								<p>{carts.totalCart}</p>
							</div>
							<button
								onClick={() => history.push({ pathname: "/checkout", state: { carts } })}
								className="proceed-checkout"
							>
								PROCEED TO CHECKOUT
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
