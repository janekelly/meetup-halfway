const createListingUrl = (lat, lng, query) => {
	return 'https://api.foursquare.com/v2/venues/search?client_id=N15A0OWLPHTZ0OAO3JBEOANFSACASLXN11VCHUZPYT4WPORZ&client_secret=SDDBNJPXKEESADP5KYTTPA1YXFYRGNGRGX5YJAGRCKFVTN1A&v=20130815&ll='+lat+','+lng+'&query=' + query;
}



export default createListingUrl;