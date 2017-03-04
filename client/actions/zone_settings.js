import {receiveErrors} from './errors';
import { ActionCreators } from 'redux-undo';
import * as API from '../util/api';
import * as C from '../constants';

export const fetchZoneSettings = id => dispatch => {
	API.fetchZoneSettings(id).then(
		r => dispatch(receiveZoneSettings(id, r.result)),
		e => dispatch(receiveErrors(e))
	)
}

export const receiveZoneSettings = (id, settings) => ({
	type: C.RECEIVE_ZONE_SETTINGS,
	id,
	settings
})

export const setZoneSSL = ({id, value, modified_on, editable}) => ({
	type: C.SET_ZONE_SSL,
	id,
	// drop undefined keys so they don't override the state in the reducer
	settings: JSON.parse(JSON.stringify({value, modified_on, editable})),
})

export const patchZoneSSL = (id, value) => dispatch => {
	dispatch(setZoneSSL({id, value}))

	API.patchZoneSSL(id, value).then(
		r => dispatch(setZoneSSL(r.result)),
		e => {
			dispatch(ActionCreators.undo())
			dispatch(receiveErrors(e))
		}
	)
}