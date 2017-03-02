import React from 'react';
import Select from 'react-select';

class SSLSelect extends React.Component {
	constructor(){
		super()
		this.state = {
			value: "Flexible"
		}
		this.setState = this.setState.bind(this);
	}
	setValue({ value }){
		this.setState({value})
	}
	render() {
		return (
			<Select
				clearable={false}
				name="ssl"
				value={this.state.value}
				options={options}
				onChange={this.setValue.bind(this)}/>
		);
	}
}

const options = [
	{value: "Off", label: "Off"},
	{value: "Flexible", label: "Flexible"},
	{value: "Full", label: "Full"},
	{value: "Full (strict)", label: "Full (strict)"},
]

export default SSLSelect;