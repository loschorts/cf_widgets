import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { combineReducers } from 'redux';

import details from './reducers/details';
import zones from './reducers/zones';
import zoneSettings from './reducers/zone_settings';
import errors from './reducers/errors';

const configureStore = (preloadedState = {}) => {
	return createStore(
		combineReducers({ details, zones, zoneSettings, errors }),
    preloadedState,
    applyMiddleware(thunk, logger())
  );
};
  
export default configureStore;