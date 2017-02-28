import React from 'react';
import {render} from 'react-dom';

import {getUserDetails} from './util/api';

window.getUserDetails = getUserDetails;

document.addEventListener("DOMContentLoaded", ()=> {
	render(
		<h1>React skeleton</h1>,
		document.querySelector("#root")
	);
});
