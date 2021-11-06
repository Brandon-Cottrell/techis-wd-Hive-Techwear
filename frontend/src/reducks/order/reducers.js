import initialState from "../store/initialState";
import * as Actions from "./actions";

export const OrdersReducer = (state = initialState.orders, action) => {
	switch (action.type) {
		case Actions.CHECKOUT_ORDER:
			return {
				...state,
			};
		default:
			return state;
	}
};