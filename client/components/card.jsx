import React from 'react';
import {timeDiff} from '../util/date';
import {notImplemented} from '../util/not_implemented'

import {Link} from 'react-router';

const Card = ({ title, body, modifiedOn, tool, showTimestamp }) => {

	const timeStamp = (
		<p className="quiet">{`This setting was last changed ${timeDiff(new Date(),
		new Date(modifiedOn))}.`}</p>
	)

	return (
		<div className="card">
			<section className="card-section">
				<h3 className="card-title">{title}</h3>
				<p>{body}</p>
				{showTimestamp ? timeStamp : ""}
			</section>
			<section className="card-section">
				{tool}
			</section>
			<section className="card-section">
				<Link onClick={notImplemented}>API ▶</Link>
				<Link onClick={notImplemented}>Help ▶</Link>
			</section>
		</div>
	);	
}

export default Card;