// keys imported from the .gitignored ./keys.js file

const headers = (xAuthEmail = "", xAuthKey = "") => {
	const h = new Headers();
	h.append("Content-Type", "application/json")
	h.append("X-Auth-Email", xAuthEmail)
	h.append("X-Auth-Key", xAuthKey)
	h.append("Origin", window.location.hostname)
	return h;
};

export const getUserDetails = (xAuthEmail, xAuthKey) => {
	return fetch(
		"api/user",
		{
			method: "GET",
			headers: headers(xAuthEmail, xAuthKey),
		}
	).then(r => r.json())
};
