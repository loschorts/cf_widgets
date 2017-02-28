// keys imported from the .gitignored ./keys.js file
import { XAuthEmail, XAuthKey } from '../../keys.js'

const headers = (xAuthEmail, xAuthKey) => {
	const h = new Headers();
	h.append("Content-Type", "application/json")
	h.append("X-Auth-Email", xAuthEmail)
	h.append("X-Auth-Key", xAuthKey)
	h.append("Origin", window.location.hostname)
	return h;
};

export const getUserDetails = () => {
	return fetch(
		"https://api.cloudflare.com/client/v4/user",
		{
			method: "GET",
			headers: headers(XAuthEmail, XAuthKey),
		}
	)
};
