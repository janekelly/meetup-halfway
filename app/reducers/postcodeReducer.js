const postcode = (state = [], action) => {
	switch (action.type) {

		case 'UPDATE_POSTCODE':
			if (action.name === 'firstinput') {
				return {
					...state,
					'firstinput': action.postcode,
					'firstinputisValid': action.isValid,
					'firstinputlat': action.isValid? action.lat : '',
					'firstinputlng': action.isValid? action.lng : ''
				}
			} else if (action.name === 'secondinput') {
				return {
					...state,
					'secondinput': action.postcode,
					'secondinputisValid': action.isValid,
					'secondinputlat': action.isValid? action.lat : '',
					'secondinputlng': action.isValid? action.lng : ''
				}
			};

		default:
			return state;
	}
};

export default postcode;