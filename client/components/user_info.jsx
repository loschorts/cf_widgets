import React from 'react';
import { connect } from 'react-redux';

class UserInfo extends React.Component {

	render(){
		const {details} = this.props;
		return (
			<div>
				<h1>User Info</h1>
			{
				Object.keys(details).map((k, i) => {
					return <p key={`ui-${i}`}>{k}: {details[k] || "nil"}</p>
				})
			}
			</div>
		);
	}
}


export default UserInfo;