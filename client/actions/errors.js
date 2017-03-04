import * as C from '../constants';

export const receiveNetworkError = error => {
	let code, message;
	if (error.errors) {
		// CF API provided error
		// takes the first message only
		code = error.errors[0].code,
		message = error.errors[1].message
	} else {
		// network error
		code = error.status,
		message = error.statusText
	}
	return {
		type: C.RECEIVE_NETWORK_ERROR,
		code,
		message
	}
}