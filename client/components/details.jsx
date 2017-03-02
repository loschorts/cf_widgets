import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component {

	render(){
		const {details} = this.props;
		return (
			<div id="user-info">
				<p>Account Settings</p>
				<ul id="details">
					{
						Object.keys(details).map((k, i) => {
							return <li key={`ui-${i}`}><strong>{k}</strong>: {details[k] || "nil"}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

const mapState = ({details}) => ({details});

export default connect(mapState)(Details);