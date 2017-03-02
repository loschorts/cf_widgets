import React from 'react';
import {connect} from 'react-redux';
import SSLCard from './ssl_card';

class Crypto extends React.Component {
	render(){
		const {zones, zoneSettings, activeId} = this.props;
		const current = zoneSettings.byZoneId[activeId]
		if (!current) return <div/>
		return (
			<div id="crypto">
				<SSLCard setting={current.ssl}/>
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