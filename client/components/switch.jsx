import React from 'react'
import Toggle from 'react-toggle'
import {patchZoneSetting} from '../actions/zone_settings';
import { connect } from 'react-redux';

const swap = setting => {
	const newSetting = JSON.parse(JSON.stringify(setting));
	newSetting.value = newSetting.value === "on" ? "off" : "on";
	return newSetting;
}

const Switch = ({ activeId, setting, patchZoneSetting }) => {
	return(
	  <Toggle
	  	checked={setting.value === "on"}
	   	onChange={patchZoneSetting.bind(null, activeId, setting.id, swap(setting)) }
		/>
	);
}

const mapState = ({zones: {activeId}}) => ({ activeId })
const mapDispatch = { patchZoneSetting }

export default connect(mapState, mapDispatch)(Switch);