import React from 'react';
import UserInfo from './user_info';
import * as API from '../util/api';
import {connect} from 'react-redux';
import {fetchUserDetails} from '../actions/settings';

class App extends React.Component {
	componentDidMount(){
		this.props.fetchUserDetails();
	}
	render(){
		const {details} = this.props.settings;
		return(
			<div id="app">
				<UserInfo details={details}/>
			</div>
		);
	}
}

const mapState = ({settings}) => ({ settings })
const mapDispatch = { fetchUserDetails };
export default connect(mapState, mapDispatch)(App);