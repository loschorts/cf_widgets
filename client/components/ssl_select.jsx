import React from 'react';
import Select from 'react-select';
import {patchZoneSetting} from '../actions/zone_settings';
import { connect } from 'react-redux';

class SSLSelect extends React.Component {
	constructor(){
		super()
		this.state = {
			value: undefined
		}
		this.setValue = this.setValue.bind(this);
	}
	setValue({ value }){
		this.props.patchZoneSetting(this.props.activeId, 'ssl', { value })
	}
	render() {
		return (
			<Select
				clearable={false}
				name="ssl"
				value={this.props.value}
				options={options}
				onChange={this.setValue}/>
		);
	}
}

const options = [
	{value: "off", label: "Off"},
	{value: "flexible", label: "Flexible"},
	{value: "full", label: "Full"},
	{value: "strict", label: "Full (strict)"},
]
const mapState = ({zones: {activeId}}) => ({activeId});
const mapDispatch = { patchZoneSetting }
export default connect(mapState, mapDispatch)(SSLSelect);