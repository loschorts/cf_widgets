import * as API from '../util/api';
import {FETCH_ZONES, RECEIVE_ZONES, SET_ZONE_SSL} from '../constants';
import {receiveErrors} from './errors';
import {fetchZoneSettings} from './zone_settings';

export const fetchZones = () => dispatch => {
	dispatch({
		type: FETCH_ZONES
	});

	API.fetchZones().then(res => {
		dispatch(receiveZones(res.result))
		dispatch(fetchZoneSettings(res.result[0].id))
	})
}

export const receiveZones = (zones) => ({
	type: RECEIVE_ZONES,
	zones
})
