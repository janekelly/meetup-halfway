const listing = (state, action) => {
	switch (action.type) {

		case 'ADD_LISTING':
			return {
				id: action.id,
				name: action.name,
				specials: action.specials,
				address: action.address
			};

		default:
			return state;
	}
};

export default listing;