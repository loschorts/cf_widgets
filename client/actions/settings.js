import * as API from '../util/api';
import { FETCH_USER_DETAILS, RECEIVE_USER_DETAILS, RECEIVE_ERRORS } from '../constants';

export const fetchUserDetails = () => dispatch => {
	dispatch({type: FETCH_USER_DETAILS});

	API.fetchUserDetails().then( 
		r => {
			dispatch(receiveUserDetails(r))
		},
		e => {
			dispatch(receiveErrors(e))
		}
	)
}

export const receiveUserDetails = ({result}) => {
	return {
		type: RECEIVE_USER_DETAILS,
		details: result
	};
}

export const receiveErrors = errors => {
	debugger
	return {
		type: RECEIVE_ERRORS,
		errors
	}
}