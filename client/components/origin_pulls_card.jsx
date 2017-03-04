import React from 'react';

import {Link} from 'react-router';
import Card from './card'
import Switch from './switch'

const OriginPullsCard = ({ setting }) => {
	const tool = (
		<div id="ssl-select-tool">
			<Switch setting={setting}/>
		</div>
	);

	return (
		<Card
			title="Authenticated Origin Pulls"
			body="TLS client certificate presented for authentication on origin pull."
			modifiedOn={setting.modified_on}
			showTimestamp={true}
			tool={tool}
		/> 
	);
}

export default OriginPullsCard;