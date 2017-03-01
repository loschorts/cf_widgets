import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/app';

document.addEventListener("DOMContentLoaded", ()=> {
	const store = configureStore();
	render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.querySelector("#root")
	);
});
