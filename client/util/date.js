const units = [
	{ unit: "year", value:   1000 * 60 * 60 * 24 * 7 * 52},
	{ unit: "week", value:   1000 * 60 * 60 * 24 * 7},
	{ unit: "day",  value:   1000 * 60 * 60 * 24},
	{ unit: "hour", value:   1000 * 60 * 60},
	{ unit: "minute", value: 1000 * 60},
	{ unit: "second", value: 1000},
]

const toUTC = d => new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(),  d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());

export const timeDiff = (a,b) => {
	const d = toUTC(a) - toUTC(b);
	let result;
	let count;

	for (let i = 0; i < units.length; i ++ ) {
		const {unit, value} = units[i]
		count = Math.floor(d / value);
		if (count > 0) {
			result = `${count} ${unit}${count > 1 ? "s" : ""} ago`;
			break;
		}
	}

	if (!result) result = "just now";
	return result;
}