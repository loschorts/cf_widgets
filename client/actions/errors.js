import * as C from '../constants';

export const receiveErrors = errors => {
	console.log(errors)
	return {
		type: C.RECEIVE_ERRORS,
		errors
	}
}