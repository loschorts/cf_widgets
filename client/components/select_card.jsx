import React from 'react';
import {timeDiff} from '../util/date';
import ZoneSettingSelect from './zone_setting_select';

import {Link} from 'react-router';
import Card from './card'

const SelectCard = ({ setting, title, body, options }) => {

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
			title={title}
			body={body}
			showTimestamp={true}
			modified={setting.modified_on}
			tool={tool}
		/> 
	);
}

export default SelectCard;