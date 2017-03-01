import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { combineReducers } from 'redux';

const configureStore = (preloadedState = {}) => {
	return createStore(
		combineReducers({}),
    preloadedState,
    applyMiddleware(thunk, logger())
  );
};
  
export default configureStore;