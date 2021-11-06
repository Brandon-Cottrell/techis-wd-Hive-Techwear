import API from "../../API";
import { fetchProductsAction } from "./actions";

const api = new API();

export const fetchProducts = (query = {}, onSuccess = null) => {
	return async (dispatch) => {
		return api.getProducts(query).then((products) => {
			dispatch(fetchProductsAction(products));
			onSuccess()
		});
	};
};
