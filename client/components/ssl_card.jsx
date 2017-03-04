import React from 'react';
import {timeDiff} from '../util/date';
import SSLSelect from './ssl_select';

import {Link} from 'react-router';
import Card from './card'

const SSLCard = ({ setting }) => {
	const tool = (
		<div id="ssl-select-tool">
			<SSLSelect value={setting.value}/>
			<span className="label success">ACTIVE CERTIFICATE</span>
		</div>
	);

	return (
		<Card
			title="SSL"
			body="Encrypt communication to and from your website using SSL."
			modified={setting.modified_on}
			tool={tool}
		/> 
	);
}

export default SSLCard;