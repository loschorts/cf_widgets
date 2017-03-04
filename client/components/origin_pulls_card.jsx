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

const OriginPullsCard = ({ setting, zoneId, patchZoneSetting }) => {
	const tool = (
		<div id="ssl-select-tool">
			<Switch
				value={setting.value}
				onChange={patchZoneSetting.bind(null, zoneId, 'tls_client_auth', swap(setting)) }
			/>
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

const mapState = ({zones: {activeId}}) => ({
	zoneId: activeId
})


const mapDispatch = { patchZoneSetting }

export default connect(mapState, mapDispatch)(OriginPullsCard);