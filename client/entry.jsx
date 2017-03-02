import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/app';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Details from './components/details';
import Crypto from './components/crypto';

const empty = ()=><div/>
const Root = ({ store }) => (
  <Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="details" component={Details}/>
				<Route path="crypto" component={Crypto}/>
				<Route path="firewall" component={empty}/>
				<Route path="speed" component={empty}/>
				<Route path="caching" component={empty}/>
			</Route>
		</Router>
  </Provider>
);

document.addEventListener("DOMContentLoaded", ()=> {
	const store = configureStore();
	render(
		<Root store={store}/>,
		document.querySelector("#root")
	);
});
