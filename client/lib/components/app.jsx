import React from 'react';
import UserInfo from './user_info';
import { myEmail, myKey } from '../../secret_key.js'
import * as API from '../util/api';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			credentials: {email: myEmail, key: myKey},
			userInfo: {}
		}
	}
	componentDidMount(){
		const {email, key} = this.state.credentials;
		API.getUserDetails(email, key).then(res => {
			this.setState({userInfo: res.result})
		})
	}
	render(){
		const {userInfo} = this.state;
		return(
			<div id="app">
				<UserInfo userInfo={userInfo}/>
			</div>
		);
	}
}

export default App;