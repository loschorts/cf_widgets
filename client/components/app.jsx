import React from 'react';
import UserInfo from './user_info';
import * as API from '../util/api';
import {connect} from 'react-redux';
import {fetchUserDetails} from '../actions/details';

class App extends React.Component {
	componentDidMount(){
		this.props.fetchUserDetails();
	}
	render(){
		const {details} = this.props;
		return(
			<div id="app">
				<UserInfo details={details}/>
			</div>
		);
	}
}

const mapState = ({details}) => ({ details })
const mapDispatch = { fetchUserDetails };
export default connect(mapState, mapDispatch)(App);