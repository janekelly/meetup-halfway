const createMidpointUrl = (lat1,lng1,lat2,lng2) => {
	return 'http://router.project-osrm.org/trip?loc=' + lat1 + ',' + lng1 + '&loc=' + lat2 + ',' + lng2;
}

export default createMidpointUrl;