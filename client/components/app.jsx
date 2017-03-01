import React from 'react';
import UserInfo from './user_info';
import * as API from '../util/api';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			userInfo: {}
		}
	}
	componentDidMount(){
		API.getUserDetails().then(r => {
			this.setState({userInfo: r.result})
		}).catch(e => {
			console.log(e)
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