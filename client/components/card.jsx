import React from 'react';
import {timeDiff} from '../util/date';

import {Link} from 'react-router';

const Card = ({ title, body, modified, tool }) => {
	return (
		<div className="card">
			<section className="card-section">
				<h3 className="card-title">{title}</h3>
				<p>{body}</p>
				<p className="quiet">{`This setting was last changed ${timeDiff(new Date(),
				new Date(modified))}.`}</p>
			</section>
			<section className="card-section">
				{tool}
			</section>
			<section className="card-section">
				<Link>API ▶</Link>
				<Link>Help ▶</Link>
			</section>
		</div>
	);	
}

export default Card;