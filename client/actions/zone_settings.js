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

export const setZoneSetting = (id, settingId, setting) => ({
	type: C.SET_ZONE_SETTING,
	id,
	settingId,
	setting
})

export const patchZoneSetting = (id, settingId, setting) => dispatch => {
	dispatch(setZoneSetting(id, settingId, setting))

	API.patchZoneSetting(id, settingId, setting).then(
		r => dispatch(setZoneSetting(id, settingId, r.result)),
		e => {
			dispatch(ActionCreators.undo())
			dispatch(receiveNetworkError(e))
		}
	)
}
