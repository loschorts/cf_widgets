import * as C from '../constants';
import undoable, { distinctState } from 'redux-undo';

const zoneSettings = (state = { byZoneId: {} }, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	
	switch (action.type) {
		case C.RECEIVE_ZONE_SETTINGS: {

			newState.byZoneId[action.id] = {}
			action.settings.forEach(setting => {
				newState.byZoneId[action.id][setting.id] = setting;
			})
			return newState;
		}

		case C.SET_ZONE_SETTING: 
			Object.assign(newState.byZoneId[action.id][action.settingId], action.setting)
			return newState;

		default:
			return state;
	}
}

export default undoable(zoneSettings, {
  filter: distinctState()
});