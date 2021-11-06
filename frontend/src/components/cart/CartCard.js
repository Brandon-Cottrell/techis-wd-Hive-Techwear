import React from "react";
import { useDispatch } from "react-redux";

import { updateCart } from "../../reducks/cart/operations";

export default function CartCard(props) {
	const { image, name, description, price } = props.cart.product;
	let quantity = props.cart.quantity;
	const cartId = props.cart.id
	const dispatch = useDispatch();

	const increaseCart = () => {
		++quantity;
		dispatch(updateCart({ quantity }, cartId));
	};

	const decreaseCart = () => {
		--quantity;
		dispatch(updateCart({ quantity }, cartId));
	};
	return (
		<div className="cart-card">
			<img className="cart-image" src={`https://res.cloudinary.com/techis/${image}`} alt="cart-item" />
			<div className="cart-content">
				<p className="cart-title">{name}</p>
				<p className="cart-description">{description}</p>
			</div>
			<div className="price-content">
				<p className="cart-price">${price}</p>
				<div className="added-cart">
					<span onClick={decreaseCart}> - </span>
					<span className="margin-top-4"> {quantity} </span>
					<span onClick={increaseCart} className="margin-top-4">
						+
					</span>
				</div>
			</div>
		</div>
	);
}
