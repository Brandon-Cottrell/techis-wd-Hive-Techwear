const initialState = {
	user: {
		errors: {
			email: null,
			password: null,
			password_confirm: null,
			error: null,
		},
	},
	categories: {
		results: [],
	},

	carts: {
		results: [],
		totalPrice: 0,
		totalCart: 0,
		totalCartItems: 0,
	},

	orders: {
		results: [],
	},

	products: {
		results: [],
	},
};

export default initialState;
