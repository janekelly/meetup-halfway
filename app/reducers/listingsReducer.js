import listing from './listingReducer';
const listings = (state = [], action) => {
	switch (action.type) {
		case 'ADD_LISTING':
			return [
				...state,
				listing(undefined, action)
			];
		case 'CLEAR_LISTINGS':
			return {
				listings: {}
			};
		default:
			return state;
	}
}

export default listings;