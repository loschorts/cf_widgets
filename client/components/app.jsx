import React from 'react';
import * as API from '../util/api';
import {connect} from 'react-redux';
import {fetchUserDetails} from '../actions/details';
import {fetchZones} from '../actions/zones';
import NavBar from './nav_bar';
import Header from './header';

class App extends React.Component {
	header(){
		switch(this.props.location.pathname) {
			case "/details":
				return {
					head: "Details",
					subhead: "View your account details.",
				}
			case "/crypto":
				return {
					head: "Crypto", 
					subhead: "Manage cryptography settings for your web site."
				}
			default: 
				return {head: "", subhead: ""}
		}
	}
	componentDidMount(){
		this.props.fetchUserDetails();
		this.props.fetchZones();
	}
	render(){
		const {children, details, zones} = this.props;
		const header = this.header();
		return(
			<div id="app">
				<Header email={details.email} zone={zones[0]}/>
				<NavBar/>
				<main>
					<section id="title">
						<h1>{header.head}</h1>
						<h2>{header.subhead}</h2>
					</section>
					{children}
				</main>
			</div>
		);
	}
}

const mapState = ({details, zones}) => ({details, zones})
const mapDispatch = { fetchUserDetails, fetchZones };
export default connect(mapState, mapDispatch)(App);