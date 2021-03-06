const $ = require("jquery");

export const fetchUserDetails = () => {
	return $.get("api/user");
}

export const fetchZones = () => {
	return $.get("api/zones");
}

export const fetchZoneSettings = id => {
	return $.get(`api/zones/${id}/settings`)
}

export const patchZoneSetting = (id, settingId, setting) => {
	return $.ajax({
		contentType: "application/json",
		url: `api/zones/${id}/settings/${settingId}`,
		method: "PATCH",
		data: JSON.stringify(setting)
	})
}