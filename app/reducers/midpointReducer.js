const midpoint = (state = [], action) => {
	switch (action.type) {

		case 'UPDATE_MIDPOINT': 
			return {
				...state,
				coordinates: action.coordinates
			}

		default:
			return state;
	}
};

export default midpoint;