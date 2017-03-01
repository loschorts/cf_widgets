const $ = require("jquery");

export const getUserDetails = () => $.get("api/user").then(r => r, e => e);
