import React from 'react';
import {Link} from 'react-router';
import notImplemented from '../util/not_implemented'

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
					<li><Link onClick={notImplemented}> + Add Site</Link></li>
					<li><Link onClick={notImplemented}> Support</Link></li>
					<li><Link to={"/details"}>{email}</Link></li>
				</ul>
			</ul>
		</header>
	);
}

export default Header;