export const setZoneSSL = ({id, value, modified_on, editable}) => ({
	type: SET_ZONE_SSL,
	id,
	// drop undefined keys so they don't override the state in the reducer
	settings: JSON.parse(JSON.stringify({value, modified_on, editable})),
})

export const patchZoneSSL = (id, value) => dispatch => {
	dispatch(setZoneSSL({id, value}))
	API.patchZoneSSL.then(
		r => dispatch(setZoneSSL(r.result)),
		e => {

			dispatch(receiveErrors(e))
		}
	)
}