import { SET_ZONE_SSL } from '../constants';

const zoneSettings = (state = { byZoneId: {} }, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case SET_ZONE_SSL: 
			if (!newState[action.id]) newState[action.id] = defaultSettings();
			Object.assign(newState[action.id].ssl, action.settings);
			return newState;
		default:
			return state;
	}
}

const nullSetting = () => ({
	id: undefined,
	value: undefined,
	modified_on: undefined,
	editable: undefined
});

const defaultSettings = () => ({
	ssl: nullSetting(),
	// advanced_ddos: nullSetting(),
	// always_online: nullSetting(),
	// automatic_https_rewrites: nullSetting(),
	// browser_cache_ttl: nullSetting(),
	// browser_check: nullSetting(),
	// cache_level: nullSetting(),
	// challenge_ttl: nullSetting(),
	// cname_flattening: nullSetting(),
	// development_mode: nullSetting(),
	// edge_cache_ttl: nullSetting(),
	// email_obfuscation: nullSetting(),
	// hotlink_protection: nullSetting(),
	// http2: nullSetting(),
	// ip_geolocation: nullSetting(),
	// ipv6: nullSetting(),
	// max_upload: nullSetting(),
	// minify: nullSetting(),
	// mirage: nullSetting(),
	// mobile_redirect: nullSetting(),
	// opportunistic_encryption: nullSetting(),
	// origin_error_page_pass_thru: nullSetting(),
	// polish: nullSetting(),
	// prefetch_preload: nullSetting(),
	// pseudo_ipv4: nullSetting(),
	// response_buffering: nullSetting(),
	// rocket_loader: nullSetting(),
	// security_header: nullSetting(),
	// security_level: nullSetting(),
	// server_side_exclude: nullSetting(),
	// sha1_support: nullSetting(),
	// sort_query_string_for_cache: nullSetting(),
	// tls_1_2_only: nullSetting(),
	// tls_1_3: nullSetting(),
	// tls_client_auth: nullSetting(),
	// true_client_ip_header: nullSetting(),
	// waf: nullSetting(),
	// webp: nullSetting(),
	// websockets: nullSetting(),
});


export default zoneSettings;