import initialState from "../store/initialState";
import * as Actions from "./actions";

export const CartsReducer = (state = initialState.carts, action) => {
	switch (action.type) {
		case Actions.FETCH_CARTS:
			return {
				...state,
				results: action.payload.carts,
				totalPrice: getTotalCartPrice(action.payload.carts),
				totalCart: action.payload.carts.length,
				totalCartItems: getTotalCartItems(action.payload.carts)
			};
		case Actions.UPDATE_CART:
			const prevCarts = state.results;
			const newCarts = prevCarts.map((cart) => {
				if (cart.id === action.payload.cart.id) {
					cart.quantity = action.payload.cart.quantity;
					cart.total_price = action.payload.cart.quantity * cart.product.price;
				}
				return cart;
			});
			return {
				...state,
				results: newCarts,
				totalPrice: getTotalCartPrice(newCarts),
				totalCart: newCarts.length,
				totalCartItems: getTotalCartItems(newCarts)
			};
		default:
			return state;
	}
};

const getTotalCartPrice = (carts) => {
	if (carts.length > 0) {
		const totalPrice = carts.reduce((prev, cur) => prev + cur.total_price, 0);
		return +totalPrice.toFixed(2);
	}
	return 0;
};

const getTotalCartItems = (carts) => {
	if (carts.length > 0) {
		const totalCartItems = carts.reduce((prev, cur) => prev + cur.quantity, 0);
		return totalCartItems;
	}
	return 0;
};
