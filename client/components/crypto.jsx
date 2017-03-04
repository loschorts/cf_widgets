import React from 'react';
import {connect} from 'react-redux';
import SSLCard from './ssl_card';
import OriginPullsCard from './origin_pulls_card';
import OpportunisticEncryptionCard from './opportunistic_encryption';

class Crypto extends React.Component {
	render(){
		const {zones, zoneSettings, activeId} = this.props;
		const current = zoneSettings.byZoneId[activeId];
		if (!current) return <div>loading...</div>
		return (
			<div id="crypto">
				<SSLCard setting={current.ssl}/>
				<OriginPullsCard setting={current.tls_client_auth}/>
				<OpportunisticEncryptionCard setting={current.opportunistic_encryption}/>
			</div>
		);	
	}
}

const mapState = ({ zones, zoneSettings: {present} }) => ({
	zones,
	zoneSettings: present,
	activeId: zones.activeId
})

export default connect(mapState)(Crypto);