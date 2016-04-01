import uriEncode from './uriEncode';
const createGeocodeUrl = (postcode) => {
	return 'https://maps.googleapis.com/maps/api/geocode/json?address='
        + uriEncode(postcode)
        + '&sensor=false&‌​components=country:UK';
}

export default createGeocodeUrl;