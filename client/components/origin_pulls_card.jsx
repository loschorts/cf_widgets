import React from 'react';

import {Link} from 'react-router';
import Card from './card'
import Switch from './switch'

const OriginPullsCard = ({ setting }) => {
	const tool = (
		<div id="ssl-select-tool">
			<Switch
				value={setting.value}
				onChange={()=>{}}
			/>
			<span className="label success">ACTIVE CERTIFICATE</span>
		</div>
	);

	return (
		<Card
			title="Authenticated Origin Pulls"
			body="TLS client certificate presented for authentication on origin pull."
			modified={setting.modified_on}
			tool={tool}
		/> 
	);
}

export default OriginPullsCard;