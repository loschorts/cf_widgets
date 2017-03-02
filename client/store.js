import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { combineReducers } from 'redux';
import details from './reducers/details';
import zones from './reducers/zones';

const configureStore = (preloadedState = {}) => {
	return createStore(
		combineReducers({details, zones}),
    preloadedState,
    applyMiddleware(thunk, logger())
  );
};
  
export default configureStore;