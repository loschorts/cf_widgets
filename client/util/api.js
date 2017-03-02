const $ = require("jquery");

export const fetchUserDetails = () => {
	return $.get("api/user");
}

export const fetchZones = () => {
	return $.get("api/zones");
}

export const patchZoneSSL = ({id, value}) => {
	return $.ajax({
		url: `api/zones/${id}/settings/ssl`,
		method: "PATCH",
		data: { value }
	})
}