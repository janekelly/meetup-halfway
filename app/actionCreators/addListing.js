let listingId = 0;
const addListing = (name, specials, address) => {
	return {
		type: 'ADD_LISTING',
		name,
		specials,
		address,
		id: listingId++
	}
}

export default addListing;