import API from '../../API';
import { checkoutOrderAction } from './actions';

const api = new API();

export const checkoutOrder = (addCartBody, onSuccess = null) => {
	return (dispatch) => {
		return api.checkoutOrder(addCartBody).then(() => {
			dispatch(checkoutOrderAction());
			onSuccess()
		});
	};
};
