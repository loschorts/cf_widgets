import React from 'react';
import {timeDiff} from '../util/date';
import SSLSelect from './ssl_select';
import ZoneSettingSelect from './zone_setting_select';

import {Link} from 'react-router';
import Card from './card'

const SSLCard = ({ setting }) => {

	const options = [
		{value: "off", label: "Off"},
		{value: "flexible", label: "Flexible"},
		{value: "full", label: "Full"},
		{value: "strict", label: "Full (strict)"},
	]

	const tool = (
		<div id="ssl-select-tool">
			<ZoneSettingSelect 
				setting={setting}
				options={options}
			/>
			<span className="label success">ACTIVE CERTIFICATE</span>
		</div>
	);

	return (
		<Card
			title="SSL"
			body="Encrypt communication to and from your website using SSL."
			modified={setting.modified_on}
			showTimestamp={true}
			tool={tool}
		/> 
	);
}

export default SSLCard;