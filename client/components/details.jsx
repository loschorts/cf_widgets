import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component {

	render(){
		const {details} = this.props;
		return (
			<div id="details" className="card">
				<h3 className="card-title">Account Settings</h3>
				<ul id="user-info">
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