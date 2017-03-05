import * as C from '../constants'
import undoable, { distinctState } from 'redux-undo';

const errors = (state = {}, action) => {	
	const newState = JSON.parse(JSON.stringify(state));
	
	switch (action.type) {
		case C.RECEIVE_NETWORK_ERROR:
			newState.networkError = {
				code: action.code,
				message: action.message
			}
			return newState;
		case C.FLUSH_NETWORK_ERROR:
			newState.networkError = undefined;
			return newState;
		default:
			return state;
	}
}

export default undoable(errors, {
  filter: distinctState()
});