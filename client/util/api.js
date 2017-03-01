const $ = require("jquery");

export const fetchUserDetails = () => {
	return $.get("api/user").then(r => r, e => e);
}
