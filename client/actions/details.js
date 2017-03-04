import * as API from '../util/api';
import * as C from '../constants';
import {receiveNetworkError} from './errors'
export const fetchUserDetails = () => dispatch => {
	dispatch({type: C.FETCH_USER_DETAILS});

	API.fetchUserDetails().then( 
		r => {
			dispatch(receiveUserDetails(r))
		},
		e => {
			dispatch(receiveNetworkError(e))
		}
	)
}

export const receiveUserDetails = ({result}) => {
	return {
		type: C.RECEIVE_USER_DETAILS,
		details: result
	};
}