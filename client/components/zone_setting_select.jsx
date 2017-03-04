import React from 'react';
import Select from 'react-select';
import {patchZoneSetting} from '../actions/zone_settings';
import { connect } from 'react-redux';

class ZoneSettingSelect extends React.Component {
	constructor(){
		super()
		this.setValue = this.setValue.bind(this);
	}
	setValue({ value }){
		const { activeId, setting, patchZoneSetting } = this.props;
		const settingId = setting.id;
		patchZoneSetting(activeId, settingId, { value })
	}
	render() {
		const {setting: {value}, options} = this.props;
		return (
			<Select
				clearable={false}
				name="ssl"
				value={value}
				options={options}
				onChange={this.setValue}/>
		);
	}
}

const mapState = ({zones: {activeId}}) => ({activeId});
const mapDispatch = { patchZoneSetting }
export default connect(mapState, mapDispatch)(ZoneSettingSelect);