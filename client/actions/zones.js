import * as API from '../util/api';
import {FETCH_ZONES, RECEIVE_ZONES, SET_ZONE_SSL} from '../constants';
import {receiveErrors} from './errors';

export const fetchZones = () => dispatch => {
	dispatch({
		type: FETCH_ZONES
	});

	API.fetchZones().then(res => {
		dispatch(receiveZones(res.result))
	})
}

export const receiveZones = (zones) => ({
	type: RECEIVE_ZONES,
	zones
})
