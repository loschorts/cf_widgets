import {RECEIVE_ZONES, SET_ZONE_SSL} from '../constants';

const zones = (state = { byId: {}, activeId: null }, action) => {
	const newState = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case RECEIVE_ZONES:
			action.zones.forEach( zone => {
				newState.byId[zone.id] = zone;
			})
			if (!newState.activeId) {
				newState.activeId = action.zones[0].id
			}
			return newState;
			break;
		default:
  		return state;
	}
}

export default zones;