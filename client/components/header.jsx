import React from 'react';
import {Link} from 'react-router';

const Header = ({email, zone}) => {
	let zoneContent;

	if (zone) {
		zoneContent = (
			<li className="zone-name">
				<span>{zone.name}</span>
			</li>
		)
	}

	return (
		<header>
			<ul className="header-list">
				<li>
					<a href="#" className="logo logo-header"/>
				</li>
				{zoneContent ? zoneContent: null}
				<ul className="header-links">
					<li><Link onClick={showStub}> + Add Site</Link></li>
					<li><Link onClick={showStub}> Support</Link></li>
					<li><Link to={"/details"}>{email}</Link></li>
				</ul>
			</ul>
		</header>
	);
}

const showStub = () => {
	alert("**not yet implemented**")
}

export default Header;