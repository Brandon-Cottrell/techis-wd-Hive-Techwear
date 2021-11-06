export const FETCH_CARTS = "FETCH_CARTS";
export const fetchCartsAction = (carts) => {
	return {
		type: FETCH_CARTS,
		payload: { carts },
	};
};

export const ADD_CART = "ADD_CART";
export const addCartAction = (cart) => {
	return {
		type: ADD_CART,
		payload: { cart },
	};
};

export const UPDATE_CART = "UPDATE_CART";
export const updateCartAction = (cart) => {
	return {
		type: UPDATE_CART,
		payload: { cart },
	};
};