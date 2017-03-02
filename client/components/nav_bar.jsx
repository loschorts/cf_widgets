import React from 'react'
import Button from './button'

const NavBar = () => {
	return (
		<nav>
			<Button path="/details" title="Details"/>
			<Button path="/crypto" title="Crypto"/>
			<Button path="/firewall" title="Firewall"/>
			<Button path="/speed" title="Speed"/>
			<Button path="/caching" title="Caching"/>
		</nav>
	)
}

export default NavBar;