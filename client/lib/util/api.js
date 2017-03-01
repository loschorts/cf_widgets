// keys imported from the .gitignored ./keys.js file
import { XAuthEmail, XAuthKey } from '../../secret_key.js'

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
		"api/user",
		{
			method: "GET",
			headers: headers(XAuthEmail, XAuthKey),
		}
	)
};
