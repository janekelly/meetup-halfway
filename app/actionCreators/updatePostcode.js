
const updatePostcode = (postcode, name, isValid, lat, lng) => {
	
	return {
		type: 'UPDATE_POSTCODE',
		postcode,
		name,
		isValid,
		lat,
		lng
	}
}

export default updatePostcode;