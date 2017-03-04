import React from 'react'
import Toggle from 'react-toggle'

const Switch = ({value, onChange }) => {
	return(
	  <Toggle
	  	defaultChecked={value === "on"}
	    onChange={onChange} />
	);
	
}

export default Switch;