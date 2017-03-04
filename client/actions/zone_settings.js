import {receiveNetworkError} from './errors';
import { ActionCreators } from 'redux-undo';
import * as API from '../util/api';
import * as C from '../constants';

export const fetchZoneSettings = id => dispatch => {
	API.fetchZoneSettings(id).then(
		r => dispatch(receiveZoneSettings(id, r.result)),
		e => dispatch(receiveNetworkError(e))
	)
}

export const receiveZoneSettings = (id, settings) => ({
	type: C.RECEIVE_ZONE_SETTINGS,
	id,
	settings
})

export const setZoneSetting = (id, settingId, settings) => ({
	type: C.SET_ZONE_SETTING,
	id,
	settingId,
	settings
})

export const setZoneSSL = (id, settings) => ({
	type: C.SET_ZONE_SSL,
	id, 
	settings
})

export const patchZoneSSL = (id, value) => dispatch => {
	dispatch(setZoneSetting(id, 'ssl', { value }))

	API.patchZoneSSL(id, value).then(
		r => dispatch(setZoneSetting(id, 'ssl', r.result)),
		e => {
			dispatch(ActionCreators.undo())
			dispatch(receiveNetworkError(e))
		}
	)
}
