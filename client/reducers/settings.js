import {FETCH_USER_DETAILS, RECEIVE_USER_DETAILS} from '../constants'

const settings = (state = {details: {}}, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_USER_DETAILS:
			newState.details = action.details;
			break;
		case FETCH_USER_DETAILS:
			return state;
			break;
	}
  return newState;
}
export default settings;