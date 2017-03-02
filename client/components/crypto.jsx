import React from 'react';
import {Link} from 'react-router';

import SSLSelect from './ssl_select';

class Crypto extends React.Component {
	render(){
		return (
			<div id="crypto">
				<div className="card">
					<section className="card-section">
						<h3 className="card-title">SSL</h3>
						<p>Encrypt communication to and from your website using SSL.</p>
						<p className="quiet">This setting was last changed 9 hours ago.</p>
					</section>
					<section className="card-section">
						<div id="ssl-select-tool">
							<SSLSelect/>
							<span className="label success">ACTIVE CERTIFICATE</span>
						</div>
					</section>
					<section className="card-section">
						<Link>API ▶</Link>
						<Link>Help ▶</Link>
					</section>
				</div>
			</div>
		);
	}
}

export default Crypto;