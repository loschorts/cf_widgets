export const receiveErrors = errors => {
	console.log(errors)
	return {
		type: RECEIVE_ERRORS,
		errors
	}
}