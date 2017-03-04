import React from 'react';

import {Link} from 'react-router';
import Card from './card'
import Switch from './switch'

import {patchZoneSetting} from '../actions/zone_settings';
import { connect } from 'react-redux';

const swap = setting => {
	setting.value = setting.value === "on" ? "off" : "on";
	return setting;
}

const OpportunisticEncryptionCard = ({ setting, zoneId, patchZoneSetting }) => {
	const tool = (
		<div id="ssl-select-tool">
			<Switch
				value={setting.value}
				onChange={patchZoneSetting.bind(null, zoneId, setting.id, swap(setting)) }
			/>
		</div>
	);

	return (
		<Card
			title="Opportunistic Encryption"
			body={`Opportunistic Encryption allows browsers to benefit from the improved performance of HTTP/2 and SPDY by letting them know that your site is available over an encrypted connection. Browsers will continue to show "http" in the address bar, not "https".`}
			showTimestamp={false}
			modifiedOn={setting.modified_on}
			tool={tool}
		/> 
	);
}

const mapState = ({zones: {activeId}}) => ({
	zoneId: activeId
})


const mapDispatch = { patchZoneSetting }

export default connect(mapState, mapDispatch)(OpportunisticEncryptionCard);