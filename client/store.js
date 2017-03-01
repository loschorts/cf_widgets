import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { combineReducers } from 'redux';
import settings from './reducers/settings';

const configureStore = (preloadedState = {}) => {
	return createStore(
		combineReducers({settings}),
    preloadedState,
    applyMiddleware(thunk, logger())
  );
};
  
export default configureStore;