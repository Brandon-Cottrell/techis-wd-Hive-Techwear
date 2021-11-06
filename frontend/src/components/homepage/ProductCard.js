import React from 'react';
import { useDispatch } from 'react-redux';

import { updateCart } from '../../reducks/cart/operations';

export default function ProductCard(props) {
	const { name, description, price, image } = props.products;
	let quantity = props.cart ? props.cart.quantity : 0;
	const cartId = props.cart ? props.cart.id : 0;
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
		<div className="product-card">
			<img className="product-image" src={image} alt="product" />
			<div className="product-content">
				<p className="product-title">{name}</p>
				<p className="product-description">{description}</p>
			</div>
			<div className="price-content">
				<p className="product-price">${price}</p>
				{quantity > 0 ? (
					<div className="added-cart">
						<span onClick={decreaseCart}> - </span>
						<span className="margin-top-4"> {quantity} </span>
						<span onClick={increaseCart} className="margin-top-4"> + </span>
					</div>
				) : (
					<button className="add-cart-btn">Add +</button>
				)}
			</div>
		</div>
	);
}
