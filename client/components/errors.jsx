import React from 'react';
import {connect} from 'react-redux';

const Errors = ({ networkError }) => {
	if (!networkError) return <div id="errors" className="hidden"/>;
	return(
		<div id="errors">
		<strong>Code:</strong> {networkError.code} <strong>Message:</strong> {networkError.message}
		</div>
	);
}

const mapState = ({ errors: {present: {networkError}} }) => ({ networkError })

export default connect(mapState)(Errors);