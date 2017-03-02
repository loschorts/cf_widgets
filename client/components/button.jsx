import React from 'react';
import {Link, hashHistory} from 'react-router'

const Button = ({ path, title}) => {
	const current = hashHistory.getCurrentLocation().pathname;
	const activeClass = (current === path) ? "active" : "";

	return (
		<Link className={`button ${activeClass}`} to={path}>
			<div className="nav-button-icon" />
			<span className="nav-button-title">{title}</span>
		</Link>
	);
}

export default Button;