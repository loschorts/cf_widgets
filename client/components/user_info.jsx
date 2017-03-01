import React from 'react';

class UserInfo extends React.Component {

	render(){
		const {userInfo} = this.props;
		return (
			<div>
				<h1>User Info</h1>
			{
				Object.keys(userInfo).map((k, i) => {
					return <p key={`ui-${i}`}>{k}: {userInfo[k] || "nil"}</p>
				})
			}
			</div>
		);
	}
}

export default UserInfo;