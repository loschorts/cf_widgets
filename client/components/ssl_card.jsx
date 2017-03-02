import React from 'react';
import {timeDiff} from '../util/date';
import SSLSelect from './ssl_select';
import {Link} from 'react-router';

const SSLCard = ({ setting }) => {
	return (
		<div className="card">
			<section className="card-section">
				<h3 className="card-title">SSL</h3>
				<p>Encrypt communication to and from your website using SSL.</p>
				<p className="quiet">This setting was last changed {
					timeDiff(new Date(), 
						new Date(setting.modified_on)
					) }.
				</p>
			</section>
			<section className="card-section">
				<div id="ssl-select-tool">
					<SSLSelect value={setting.value}/>
					<span className="label success">ACTIVE CERTIFICATE</span>
				</div>
			</section>
			<section className="card-section">
				<Link>API ▶</Link>
				<Link>Help ▶</Link>
			</section>
		</div>
	);	
}

export default SSLCard;